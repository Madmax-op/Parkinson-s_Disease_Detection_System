# AI-Based Parkinson's Disease Detection System

Modern web application that demonstrates an **AI-powered Parkinson's Disease detection platform** built for a university minor project. It combines a trained **SVM model** (Scikit-learn) with a **Flask API** backend and a **React + TailwindCSS** frontend styled as a professional healthcare dashboard.

---

## 1. Project Overview

- **Goal**: Provide an interactive UI where clinicians/researchers can enter **biomedical voice features** and obtain a prediction from a trained ML model for **Parkinson's vs Healthy**.
- **Core idea**: Simulate a real-world AI healthcare platform with:
  - Clean medical UI (light, blue/teal palette)
  - Animated landing page
  - Prediction form for 22 voice features
  - Analytics dashboard (static demo charts)
  - Research and team information

---

## 2. Tech Stack

- **Frontend**
  - React 18 (Vite)
  - TailwindCSS (medical UI styling)
  - Framer Motion (animations)
  - Lucide React (icons)
  - Chart.js + react-chartjs-2 (analytics charts)

- **Backend**
  - Python 3 + Flask
  - Flask-CORS
  - Scikit-learn SVM model
  - StandardScaler for feature scaling
  - Joblib for model persistence

---

## 3. Project Structure (high level)

```text
project-root (Parkinson_Disease)
│
├─ backend/
│  └─ app.py            # Flask API exposing POST /predict
│
├─ ml/
│  ├─ parkinsons_model.pkl   # Trained SVM model (Scikit-learn)
│  ├─ scaler*.pkl            # StandardScaler used during training
│  └─ parkinsons.csv         # Original dataset (for reference)
│
├─ src/
│  ├─ App.jsx                # React routing & main layout usage
│  ├─ main.jsx               # React entrypoint (Vite)
│  ├─ index.css              # Tailwind base + custom utilities
│  ├─ components/
│  │   ├─ Layout.jsx         # Header, navbar, footer
│  │   └─ BrainHero.jsx      # Animated hero (landing)
│  └─ pages/
│      ├─ LandingPage.jsx        # Overview, disease info
│      ├─ AboutParkinsonPage.jsx # Detailed disease explanation
│      ├─ ParkinsonPredictor.jsx # MAIN prediction page (SVM)
│      ├─ AnalyticsPage.jsx      # Static analytics dashboard
│      ├─ ResearchPage.jsx       # AI & Parkinson’s research context
│      └─ TeamPage.jsx           # Project + team + guide details
│
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ vite.config.mts
├─ postcss.config.js
└─ requirements.txt        # Python dependencies
```

---

## 4. Backend (Flask + SVM) – `backend/app.py`

### 4.1 Model loading

- Expects the trained artifacts under `ml/` at the project root:
  - `ml/parkinsons_model.pkl` – Scikit-learn `SVC` (or compatible) model.
  - `ml/scaler.pkl` or a file matching `ml/scaler*.pkl` – `StandardScaler`.
- The backend:
  - Locates these files using `Path`.
  - Loads them via `joblib.load(...)` at startup.

### 4.2 `/predict` endpoint

- **Method**: `POST /predict`
- **Input JSON**:

```json
{
  "features": [
    119.992, 157.302, 74.997, 0.00784, 0.00007, 0.00370, 0.00554, 0.01109,
    0.04374, 0.426, 0.02182, 0.03130, 0.02971, 0.06545, 0.02211,
    21.033, 0.414783, 0.815285, -4.813031, 0.266482, 2.301442, 0.284654
  ]
}
```

This is a 22‑element array corresponding to the biomedical voice features (Fo, Fhi, Flo, Jitter, Shimmer, NHR, RPDE, etc.) in the **same order as the model was trained**.

### 4.3 Processing steps

1. Validate that `features` is a list of length 22.
2. Convert to a `numpy` array and reshape to `(1, 22)`.
3. Apply `scaler.transform(...)` to standardize input.
4. Call `model.predict(X_scaled)`:
   - Assumes output `1 = Parkinson's`, `0 = Healthy`.
5. Build JSON response:

```json
{
  "prediction": "Parkinson's Detected",
  "status": 1
}
```

or

```json
{
  "prediction": "Healthy",
  "status": 0
}
```

### 4.4 CORS & server settings

- `Flask-CORS` enabled on `/predict` so the React app (Vite dev server) can call it.
- Development server runs at:
  - `http://127.0.0.1:5000`

---

## 5. Frontend (React + Tailwind) – key pages

### 5.1 Layout & navigation – `components/Layout.jsx`

- Sticky medical-themed header with logo/brain icon.
- Navigation items:
  - `Overview` (`/`)
  - `About Parkinson's` (`/about-parkinson`)
  - `Prediction` (`/predict`)
  - `Analytics Dashboard` (`/analytics`)
  - `Research` (`/research`)
  - `Team` (`/team`)
- Primary CTA button **“Try Prediction Model”** routes to `/predict`.
- Footer:
  - Medical disclaimer.
  - GitHub link placeholder.
  - Credits highlighting collaboration with **KIIT University**.

### 5.2 Landing page – `LandingPage.jsx` + `BrainHero.jsx`

- Hero with title:
  - **“AI-Based Parkinson’s Disease Detection System”**
- Subtitle explaining early detection using AI and biomedical voice measurements.
- Animated brain / neural network visualization (Framer Motion).
- Sections:
  - What Parkinson’s Disease is.
  - Why early detection matters.
  - How AI supports diagnosis.
  - Symptom overview (motor vs non‑motor).

### 5.3 Prediction page (core feature) – `ParkinsonPredictor.jsx`

- Central input form with **22 biomedical voice parameters**:
  - Fo, Fhi, Flo
  - Jitter, JitterAbs, RAP, PPQ, DDP
  - Shimmer, ShimmerDB, APQ3, APQ5, APQ, DDA
  - NHR, HNR
  - RPDE, DFA, spread1, spread2, D2, PPE
- TailwindCSS layout:
  - 2‑column grid on larger screens.
  - Rounded, soft blue/white card design.
- Buttons:
  - **Predict Parkinson’s Disease** – POSTs to `http://localhost:5000/predict` with the `features` array.
  - **Load Sample Data** – auto‑fills fields with a known sample from the dataset.
- Result card:
  - Shows `prediction` text (`Parkinson's Detected` or `Healthy`).
  - Shows numeric status (`1` / `0`).
  - Uses **green** styling for healthy, **red** for Parkinson’s detected.
  - Includes a short medical disclaimer.

### 5.4 Analytics dashboard – `AnalyticsPage.jsx`

Static (demo) analytics using Chart.js:

- Cross‑validation accuracy line chart.
- Feature “importance” bar chart (Fo, Jitter, Shimmer, RPDE, etc.).
- Dataset class distribution (Parkinson’s vs healthy).
- Prediction confidence distribution.

This page is meant for **presentation purposes** and can be updated with real metrics if available.

### 5.5 About, Research, Team pages

- **AboutParkinsonPage.jsx**: Detailed explanation of Parkinson’s disease, symptoms, causes, and importance of early diagnosis with statistic cards.
- **ResearchPage.jsx**: Textual overview of:
  - Research directions in Parkinson’s.
  - Current treatments.
  - Use of AI/ML in neurological disease detection.
  - Future scope of this project.
- **TeamPage.jsx**: Academic details:
  - Project: *AI-Based Parkinson’s Disease Detection System*.
  - Students: **Vivek Raj Sahay, Saumyadeep, Aryan Parihar, Albia Sajid, Shuvi Kumari, Adya Abha**.
  - University: **KIIT University**, Department **CSCE**.
  - Faculty Guide: **Prasenjit Maiti**, **Assistant Professor**, School of Computer Engineering.

---

## 6. Running the Project

### 6.1 Backend setup

1. Create and activate a virtual environment (optional but recommended).
2. Install Python dependencies from the project root:

```bash
pip install -r requirements.txt
```

3. Ensure the model files exist:

```text
ml/parkinsons_model.pkl
ml/scaler.pkl  (or scaler (2).pkl, etc.)
```

4. Start the Flask backend:

```bash
cd backend
python app.py
```

The API should now be available at `http://localhost:5000/predict`.

### 6.2 Frontend setup

From the project root:

```bash
npm install
npm run dev
```

The Vite dev server will print a URL such as `http://localhost:5173`. Open it in your browser.

Key routes to test:

- `/` – Landing page + hero.
- `/predict` – Main prediction page (SVM integration).
- `/analytics` – Analytics dashboard.
- `/about-parkinson`, `/research`, `/team` – Information pages.

---

## 7. How to Demonstrate in a Viva / Presentation

1. **Introduce the problem** – Parkinson’s disease, importance of early detection, role of voice biomarkers.
2. **Explain the ML model** – Trained SVM + StandardScaler on biomedical voice dataset (`ml/parkinsons.csv`).
3. **Show the architecture** – React frontend → Flask API (`/predict`) → SVM model & scaler.
4. **Live demo** – On `/predict`:
   - Load sample data.
   - Run prediction and interpret result (`Parkinson's Detected` vs `Healthy`).
5. **Show analytics** – Use `/analytics` to discuss potential performance and feature importance.
6. **Discuss limitations** – Prototype only, not a medical device; dataset size, need for clinical validation.
7. **Future work** – Better explainability, real clinical integration, additional sensor data, longitudinal tracking.

---

## 8. Notes & Customization

- You can retrain the SVM with different features or hyperparameters; just resave:

```python
from joblib import dump
dump(trained_model, "ml/parkinsons_model.pkl")
dump(trained_scaler, "ml/scaler.pkl")
```

- If you add or reorder features, make sure the **input order in `ParkinsonPredictor.jsx`** matches exactly what the model expects.
- All texts (e.g., research description, statistics) are easily editable in the corresponding `src/pages/*.jsx` files.

