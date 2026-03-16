import { motion } from "framer-motion";
import { Stethoscope, Activity, Brain, LineChart, Sparkles } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.4 }
  })
};

export default function LandingPage() {
  return (
    <div className="mt-10 space-y-14">
      <section className="grid md:grid-cols-3 gap-6">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          className="glass-panel p-6 space-y-3"
        >
          <div className="inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-medical-blue/10 text-medical-blue">
            <Stethoscope className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-semibold text-slate-900">
            About Parkinson&apos;s Disease
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Parkinson&apos;s is a chronic, progressive neurodegenerative
            disorder that primarily affects movement. As dopamine-producing
            neurons in the brain deteriorate, patients experience tremors,
            rigidity, slowness and impaired balance.
          </p>
          <p className="text-xs text-slate-500">
            It currently affects more than{" "}
            <span className="font-semibold">10 million people worldwide</span>.
          </p>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          className="glass-panel p-6 space-y-3"
        >
          <div className="inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-medical-teal/10 text-medical-teal">
            <Activity className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-semibold text-slate-900">
            Why Early Detection Matters
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Many subtle motor and vocal changes appear years before a formal
            diagnosis. Identifying these early biomarkers enables clinicians to
            start neuroprotective therapies sooner, potentially slowing disease
            progression and preserving quality of life.
          </p>
          <p className="text-xs text-slate-500">
            AI models can pick up patterns that are invisible to the human eye.
          </p>
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          className="glass-panel p-6 space-y-3"
        >
          <div className="inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-medical-blue/10 text-medical-blue">
            <Brain className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-semibold text-slate-900">
            How Our AI Helps
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            The model analyzes tremor frequency, voice variation, handwriting
            stability and other quantitative markers to estimate the probability
            of Parkinson&apos;s. The dashboard then explains which features
            contributed most to the prediction.
          </p>
          <p className="text-xs text-slate-500">
            Built as a decision-support tool to augment, not replace,
            clinicians.
          </p>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-6 space-y-4"
        >
          <div className="flex items-center gap-2 text-medical-blue text-sm font-semibold">
            <LineChart className="h-4 w-4" />
            Symptoms Overview
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-medical-soft/80 border border-white/70 p-3 space-y-1">
              <p className="font-semibold text-slate-800">Motor Symptoms</p>
              <ul className="list-disc list-inside text-slate-600 text-xs space-y-1">
                <li>Resting tremor</li>
                <li>Bradykinesia (slowness)</li>
                <li>Muscle rigidity</li>
                <li>Postural instability</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-medical-soft/80 border border-white/70 p-3 space-y-1">
              <p className="font-semibold text-slate-800">
                Non-Motor Symptoms
              </p>
              <ul className="list-disc list-inside text-slate-600 text-xs space-y-1">
                <li>Sleep disturbances</li>
                <li>Loss of smell</li>
                <li>Cognitive changes</li>
                <li>Mood disorders</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-6 space-y-4"
        >
          <div className="flex items-center gap-2 text-medical-teal text-sm font-semibold">
            <Sparkles className="h-4 w-4" />
            How AI Supports Diagnosis
          </div>
          <div className="space-y-3 text-sm text-slate-600">
            <p>
              Our AI model is trained on labeled clinical datasets where each
              record combines structured clinical scores and quantitative
              signals. Once connected to your trained model, this interface will
              send the entered parameters to the backend and display:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>Estimated probability of Parkinson&apos;s</li>
              <li>Risk level (Low / Medium / High)</li>
              <li>Model confidence score</li>
              <li>Feature importance breakdown on the analytics dashboard</li>
            </ul>
            <p className="text-xs text-slate-500">
              The goal is to help clinicians prioritize follow-up testing,
              neuroimaging or specialist referrals when subtle risk is detected.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

