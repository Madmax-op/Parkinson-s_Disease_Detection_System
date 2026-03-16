import { useState } from "react";

const featureFields = [
  { name: "Fo", label: "Fo (Average Vocal Frequency)", placeholder: "119.992" },
  { name: "Fhi", label: "Fhi (Maximum Vocal Frequency)", placeholder: "157.302" },
  { name: "Flo", label: "Flo (Minimum Vocal Frequency)", placeholder: "74.997" },
  { name: "Jitter", label: "Jitter", placeholder: "0.00784" },
  { name: "JitterAbs", label: "Jitter (Abs)", placeholder: "0.00007" },
  { name: "RAP", label: "RAP", placeholder: "0.00370" },
  { name: "PPQ", label: "PPQ", placeholder: "0.00554" },
  { name: "DDP", label: "DDP", placeholder: "0.01109" },
  { name: "Shimmer", label: "Shimmer", placeholder: "0.04374" },
  { name: "ShimmerDB", label: "Shimmer (dB)", placeholder: "0.426" },
  { name: "APQ3", label: "APQ3", placeholder: "0.02182" },
  { name: "APQ5", label: "APQ5", placeholder: "0.03130" },
  { name: "APQ", label: "APQ", placeholder: "0.02971" },
  { name: "DDA", label: "DDA", placeholder: "0.06545" },
  { name: "NHR", label: "NHR", placeholder: "0.02211" },
  { name: "HNR", label: "HNR", placeholder: "21.033" },
  { name: "RPDE", label: "RPDE", placeholder: "0.414783" },
  { name: "DFA", label: "DFA", placeholder: "0.815285" },
  { name: "spread1", label: "spread1", placeholder: "-4.813031" },
  { name: "spread2", label: "spread2", placeholder: "0.266482" },
  { name: "D2", label: "D2", placeholder: "2.301442" },
  { name: "PPE", label: "PPE", placeholder: "0.284654" }
];

const sampleValues = [
  119.992, 157.302, 74.997, 0.00784, 0.00007, 0.0037, 0.00554, 0.01109, 0.04374,
  0.426, 0.02182, 0.0313, 0.02971, 0.06545, 0.02211, 21.033, 0.414783, 0.815285,
  -4.813031, 0.266482, 2.301442, 0.284654
];

export default function ParkinsonPredictor() {
  const [form, setForm] = useState(
    featureFields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSample = () => {
    const filled = {};
    featureFields.forEach((field, idx) => {
      filled[field.name] = sampleValues[idx].toString();
    });
    setForm(filled);
    setResult(null);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setResult(null);

    try {
      const features = featureFields.map((field) =>
        Number(form[field.name] || 0)
      );

      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ features })
      });

      if (!res.ok) {
        let details = "";
        try {
          const errJson = await res.json();
          details = errJson?.error ? ` (${errJson.error})` : "";
        } catch {
          // ignore
        }
        throw new Error(`API error${details}`);
      }

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setError(
        err?.message ||
          "Unable to get prediction. Make sure the Flask backend is running on port 5000."
      );
    } finally {
      setLoading(false);
    }
  };

  const isParkinson = result?.status === 1;
  const resultColor = isParkinson ? "text-red-600" : "text-emerald-600";
  const resultBg = isParkinson ? "bg-red-50 border-red-200" : "bg-emerald-50 border-emerald-200";

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-sky-100 p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 text-center mb-2">
          Parkinson&apos;s Disease Prediction
        </h1>
        <p className="text-sm text-slate-600 text-center mb-6">
          Enter the biomedical voice measurements below and send them to the
          trained SVM model to estimate the presence of Parkinson&apos;s
          Disease.
        </p>

        <div className="grid lg:grid-cols-3 gap-6">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-4 max-h-[480px] lg:max-h-none overflow-y-auto pr-1"
          >
            <div className="grid sm:grid-cols-2 gap-4 text-xs md:text-sm">
              {featureFields.map((field) => (
                <label key={field.name} className="space-y-1">
                  <span className="text-slate-700">{field.label}</span>
                  <input
                    type="number"
                    step="any"
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-2 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition"
                  />
                </label>
              ))}
            </div>

            {error && (
              <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                {error}
              </p>
            )}

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-sky-600 text-white text-sm font-semibold shadow-md shadow-sky-300 hover:bg-sky-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                {loading ? "Predicting..." : "Predict Parkinson's Disease"}
              </button>
              <button
                type="button"
                onClick={handleSample}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-sky-200 text-sm text-sky-700 bg-sky-50 hover:bg-sky-100 transition"
              >
                Load Sample Data
              </button>
            </div>
          </form>

          <div className="flex flex-col justify-center">
            <div
              className={`rounded-3xl border ${result ? resultBg : "bg-slate-50 border-slate-200"} px-5 py-6 text-center`}
            >
              <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">
                Prediction Result
              </p>
              <p
                className={`text-xl md:text-2xl font-semibold ${
                  result ? resultColor : "text-slate-700"
                }`}
              >
                {result
                  ? result.prediction
                  : "Awaiting input — run a prediction."}
              </p>
              {result && (
                <p className="text-xs text-slate-500 mt-3">
                  Status code:{" "}
                  <span className="font-mono font-semibold">{result.status}</span>
                </p>
              )}
              <p className="text-[11px] text-slate-500 mt-4">
                This tool is a research and education prototype. It should not be
                used for self-diagnosis or to make medical decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

