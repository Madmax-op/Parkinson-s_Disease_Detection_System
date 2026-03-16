import { motion } from "framer-motion";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";
import { LineChart, BarChart3, PieChart } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

export default function AnalyticsPage() {
  const accuracyData = {
    labels: ["Fold 1", "Fold 2", "Fold 3", "Fold 4", "Fold 5"],
    datasets: [
      {
        label: "Accuracy",
        data: [0.86, 0.88, 0.9, 0.87, 0.89],
        borderColor: "#1B75D0",
        backgroundColor: "rgba(27, 117, 208, 0.1)",
        tension: 0.35,
        fill: true
      }
    ]
  };

  const featureImportance = {
    labels: [
      "Tremor Frequency",
      "Voice Variation",
      "Motor Control",
      "Handwriting",
      "Age"
    ],
    datasets: [
      {
        label: "Relative Importance",
        data: [0.26, 0.18, 0.24, 0.2, 0.12],
        backgroundColor: [
          "#1B75D0",
          "#2BB3C0",
          "#0EA5E9",
          "#6366F1",
          "#22C55E"
        ],
        borderRadius: 10
      }
    ]
  };

  const datasetDistribution = {
    labels: ["Parkinson's Patients", "Healthy Controls"],
    datasets: [
      {
        label: "Count",
        data: [195, 120],
        backgroundColor: ["#1B75D0", "#E1F3FF"],
        borderRadius: 12
      }
    ]
  };

  const confidenceData = {
    labels: ["0–0.2", "0.2–0.4", "0.4–0.6", "0.6–0.8", "0.8–1.0"],
    datasets: [
      {
        label: "Prediction Count",
        data: [15, 25, 40, 65, 80],
        backgroundColor: "rgba(27, 117, 208, 0.7)",
        borderRadius: 8
      }
    ]
  };

  return (
    <div className="space-y-8">
      <div className="glass-panel p-6 md:p-8 space-y-3">
        <div className="flex items-center gap-2 text-medical-blue text-sm font-semibold">
          <LineChart className="h-4 w-4" />
          Visual Analytics Dashboard
        </div>
        <p className="text-sm text-slate-600">
          This dashboard presents a high-level overview of model performance,
          feature importance, dataset composition and prediction confidence. You
          can replace the dummy values here with metrics computed from your own
          trained model.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="glass-panel p-5 space-y-3"
        >
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <LineChart className="h-4 w-4 text-medical-blue" />
              <span className="font-semibold text-slate-800">
                Cross-Validation Accuracy
              </span>
            </div>
            <span className="text-slate-500">Mean ≈ 88%</span>
          </div>
          <div className="h-56">
            <Line
              data={accuracyData}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                  x: {
                    grid: { display: false },
                    ticks: { font: { size: 10 } }
                  },
                  y: {
                    min: 0.8,
                    max: 1.0,
                    ticks: { stepSize: 0.05, font: { size: 10 } }
                  }
                }
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="glass-panel p-5 space-y-3"
        >
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-medical-teal" />
              <span className="font-semibold text-slate-800">
                Feature Importance
              </span>
            </div>
            <span className="text-slate-500">Normalized</span>
          </div>
          <div className="h-56">
            <Bar
              data={featureImportance}
              options={{
                plugins: { legend: { display: false } },
                scales: {
                  x: {
                    grid: { display: false },
                    ticks: { font: { size: 10 } }
                  },
                  y: {
                    beginAtZero: true,
                    max: 0.3,
                    ticks: { stepSize: 0.05, font: { size: 10 } }
                  }
                }
              }}
            />
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="glass-panel p-5 space-y-3 lg:col-span-1"
        >
          <div className="flex items-center gap-2 text-xs">
            <PieChart className="h-4 w-4 text-medical-blue" />
            <span className="font-semibold text-slate-800">
              Dataset Distribution
            </span>
          </div>
          <div className="h-52">
            <Bar
              data={datasetDistribution}
              options={{
                indexAxis: "y",
                plugins: { legend: { display: false } },
                scales: {
                  x: {
                    beginAtZero: true,
                    grid: { color: "#E5EDF7" },
                    ticks: { font: { size: 10 } }
                  },
                  y: {
                    grid: { display: false },
                    ticks: { font: { size: 10 } }
                  }
                }
              }}
            />
          </div>
          <p className="text-[11px] text-slate-500">
            Balanced datasets are essential. You can extend this view with
            demographic splits (age, gender) for fairness analysis.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="glass-panel p-5 space-y-3 lg:col-span-2"
        >
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <LineChart className="h-4 w-4 text-medical-teal" />
              <span className="font-semibold text-slate-800">
                Prediction Confidence Distribution
              </span>
            </div>
            <span className="text-slate-500">All validation predictions</span>
          </div>
          <div className="h-56">
            <Bar
              data={confidenceData}
              options={{
                plugins: { legend: { display: false } },
                scales: {
                  x: {
                    grid: { display: false },
                    ticks: { font: { size: 10 } }
                  },
                  y: {
                    beginAtZero: true,
                    grid: { color: "#E5EDF7" },
                    ticks: { font: { size: 10 } }
                  }
                }
              }}
            />
          </div>
          <p className="text-[11px] text-slate-500">
            A well-calibrated model should have many predictions with high
            confidence in both classes, but you should be cautious if most
            predictions cluster around 50%.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

