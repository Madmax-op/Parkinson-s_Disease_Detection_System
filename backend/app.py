from __future__ import annotations

from pathlib import Path
from typing import Any, List

import json
import numpy as np
from flask import Flask, jsonify, request
from flask_cors import CORS
from joblib import load


BASE_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = BASE_DIR.parent
MODEL_PATH = PROJECT_ROOT / "ml" / "parkinsons_model.pkl"
SCALER_PATH = PROJECT_ROOT / "ml" / "scaler.pkl"

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "*"}})


def load_model_and_scaler():
  """
  Load the trained Parkinson's SVM model and StandardScaler.

  Expects:
    ml/parkinsons_model.pkl
    ml/scaler.pkl
  at the project root.
  """
  model_path = MODEL_PATH
  scaler_path = SCALER_PATH

  if not model_path.exists():
    raise FileNotFoundError(
      "Model file not found. Expected 'ml/parkinsons_model.pkl'."
    )

  if not scaler_path.exists():
    # Be tolerant of common Windows duplicate filename like "scaler (2).pkl"
    ml_dir = PROJECT_ROOT / "ml"
    candidates = sorted(ml_dir.glob("scaler*.pkl"))
    if candidates:
      scaler_path = candidates[0]
    else:
      raise FileNotFoundError(
        "Scaler file not found. Expected 'ml/scaler.pkl' (or a file matching 'ml/scaler*.pkl')."
      )

  model = load(model_path)
  scaler = load(scaler_path)
  return model, scaler


try:
  model, scaler = load_model_and_scaler()
  _load_error = ""
except FileNotFoundError as exc:
  model = None  # type: ignore[assignment]
  scaler = None  # type: ignore[assignment]
  _load_error = str(exc)


@app.post("/predict")
def predict() -> Any:
  """
  Accepts an array of 22 biomedical voice features and returns SVM prediction.

  Expected JSON body:
  {
    "features": [f1, f2, ..., f22]
  }
  """
  data = request.get_json(silent=True)
  if not isinstance(data, dict):
    data = None
  if data is None:
    # Be tolerant if client sends JSON with incorrect content-type
    try:
      raw = request.get_data(cache=False, as_text=True) or ""
      data = json.loads(raw) if raw else {}
    except Exception:
      data = {}
  raw_features = data.get("features")

  if not isinstance(raw_features, list) or len(raw_features) != 22:
    return (
      jsonify(
        {
          "error": "Invalid input. 'features' must be a list of 22 numeric values.",
          "example": [
            119.992,
            157.302,
            74.997,
            0.00784,
            0.00007,
            0.00370,
            0.00554,
            0.01109,
            0.04374,
            0.426,
            0.02182,
            0.03130,
            0.02971,
            0.06545,
            0.02211,
            21.033,
            0.414783,
            0.815285,
            -4.813031,
            0.266482,
            2.301442,
            0.284654,
          ],
        }
      ),
      400,
    )

  if model is None or scaler is None:
    return jsonify({"error": _load_error or "Model not loaded."}), 500

  try:
    features: List[float] = [float(v) for v in raw_features]
  except (TypeError, ValueError):
    return jsonify({"error": "All feature values must be numeric."}), 400

  X = np.array(features, dtype=float).reshape(1, -1)
  X_scaled = scaler.transform(X)

  # Assume the trained model outputs 1 for Parkinson's, 0 for Healthy
  y_pred = int(model.predict(X_scaled)[0])

  prediction_text = "Parkinson's Detected" if y_pred == 1 else "Healthy"

  return jsonify(
    {
      "prediction": prediction_text,
      "status": y_pred,
    }
  )


if __name__ == "__main__":
  app.run(host="0.0.0.0", port=5000, debug=True)

