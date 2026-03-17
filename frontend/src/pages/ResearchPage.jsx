import { motion } from "framer-motion";
import { Microscope, Brain, Cpu, Pill, Sparkles } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="space-y-8">
      <div className="glass-panel p-6 md:p-8 space-y-3">
        <div className="flex items-center gap-2 text-medical-blue text-sm font-semibold">
          <Microscope className="h-4 w-4" />
          Parkinson&apos;s Research &amp; AI in Healthcare
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          This page summarizes the scientific context behind Parkinson&apos;s
          disease, current treatment strategies, and how artificial intelligence
          is being used to transform neurological diagnostics and monitoring.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="glass-panel p-6 space-y-3 lg:col-span-2"
        >
          <div className="flex items-center gap-2 text-medical-blue text-sm font-semibold">
            <Brain className="h-4 w-4" />
            Current Research Directions
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Researchers are actively investigating the cellular mechanisms
            underlying Parkinson&apos;s disease, including mitochondrial
            dysfunction, oxidative stress, protein misfolding and
            neuroinflammation. Large-scale cohort studies and biobanks are
            helping to identify genetic variants and environmental exposures
            that contribute to disease risk.
          </p>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li>Identification of early biomarkers in blood, CSF and imaging</li>
            <li>Development of disease-modifying therapies</li>
            <li>Understanding non-motor symptom progression</li>
            <li>Digital phenotyping using wearables and smartphones</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="glass-panel p-6 space-y-3"
        >
          <div className="flex items-center gap-2 text-medical-teal text-sm font-semibold">
            <Pill className="h-4 w-4" />
            Current Treatments
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            While there is no cure yet, multiple evidence-based therapies can
            significantly alleviate symptoms:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li>Levodopa and dopamine agonists</li>
            <li>MAO-B inhibitors and COMT inhibitors</li>
            <li>Deep brain stimulation (DBS)</li>
            <li>Physiotherapy, occupational and speech therapy</li>
          </ul>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="glass-panel p-6 space-y-3"
        >
          <div className="flex items-center gap-2 text-medical-blue text-sm font-semibold">
            <Cpu className="h-4 w-4" />
            AI in Neurological Diagnostics
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Machine learning is being used to analyze voice recordings,
            handwriting samples, gait patterns, smartphone sensor data and brain
            imaging to detect subtle signatures of Parkinson&apos;s disease.
          </p>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li>Early detection from voice and speech analysis</li>
            <li>Automatic scoring of motor symptoms from wearable sensors</li>
            <li>
              MRI and PET imaging analysis for tracking neurodegeneration
            </li>
            <li>
              Personalized treatment recommendations and medication
              optimization
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="glass-panel p-6 space-y-3"
        >
          <div className="flex items-center gap-2 text-medical-teal text-sm font-semibold">
            <Sparkles className="h-4 w-4" />
            Future Scope of This Project
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            This web application is designed as a research prototype that can be
            integrated with real-world datasets and advanced ML models. Possible
            future extensions include:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li>Integration with wearable sensor data streams</li>
            <li>Support for longitudinal patient monitoring dashboards</li>
            <li>Model explainability using SHAP or LIME visualizations</li>
            <li>Secure clinician portal with anonymized case reviews</li>
          </ul>
          <p className="text-xs text-slate-500">
            Any real clinical deployment would require rigorous validation,
            regulatory approvals and strong privacy protections.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

