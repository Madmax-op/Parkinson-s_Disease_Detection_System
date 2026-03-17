import { motion } from "framer-motion";
import { Activity, BarChart3, Globe2, AlertCircle } from "lucide-react";

export default function AboutParkinsonPage() {
  const stats = [
    {
      label: "Global Prevalence",
      value: "10M+",
      description: "People worldwide living with Parkinson's disease"
    },
    {
      label: "Average Age at Onset",
      value: "60+",
      description: "Most diagnoses occur after age 60"
    },
    {
      label: "Projected Growth",
      value: "2x by 2040",
      description: "Number of people affected expected to double"
    }
  ];

  return (
    <div className="space-y-10">
      <div className="glass-panel p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-2 text-medical-blue text-sm font-semibold">
          <Activity className="h-4 w-4" />
          Understanding Parkinson&apos;s Disease
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
          A Progressive Neurodegenerative Movement Disorder
        </h1>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Parkinson&apos;s disease is a chronic, progressive disorder of the
          central nervous system. It primarily affects movement, but over time
          it can also impact cognition, mood and autonomic functions. The core
          pathology involves the gradual loss of dopamine-producing neurons in
          an area of the brain called the substantia nigra.
        </p>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Classic motor symptoms include resting tremor, bradykinesia
          (slowness), muscular rigidity and postural instability. However,
          non-motor symptoms such as sleep disturbances, constipation,
          depression, anxiety and loss of smell often appear years before a
          formal diagnosis.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel p-5 space-y-2"
          >
            <p className="text-xs font-semibold text-medical-blue/80">
              {stat.label}
            </p>
            <p className="text-2xl font-semibold text-slate-900">
              {stat.value}
            </p>
            <p className="text-xs text-slate-600">{stat.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="glass-panel p-6 space-y-3 lg:col-span-2">
          <div className="flex items-center gap-2 text-medical-teal text-sm font-semibold">
            <Globe2 className="h-4 w-4" />
            Causes &amp; Risk Factors
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            The exact cause of Parkinson&apos;s disease is still not fully
            understood. Most cases are thought to arise from a complex
            interaction between genetic susceptibility and environmental
            exposures. Known or suspected risk factors include:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
            <li>
              <span className="font-semibold">Age</span> – risk increases
              significantly after age 60.
            </li>
            <li>
              <span className="font-semibold">Genetics</span> – certain gene
              mutations (e.g., LRRK2, PARK7, SNCA) can increase risk.
            </li>
            <li>
              <span className="font-semibold">Environmental factors</span> –
              exposure to pesticides, heavy metals or air pollution.
            </li>
            <li>
              <span className="font-semibold">Head trauma</span> – repeated head
              injuries may raise risk.
            </li>
          </ul>
        </div>

        <div className="glass-panel p-6 space-y-3">
          <div className="flex items-center gap-2 text-medical-blue text-sm font-semibold">
            <BarChart3 className="h-4 w-4" />
            Disease Burden &amp; Statistics
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Parkinson&apos;s is one of the fastest growing neurological
            conditions worldwide in terms of disability and deaths. As
            populations age, the number of people affected is projected to
            double by 2040.
          </p>
          <ul className="text-xs text-slate-600 space-y-1">
            <li>• More common in men than women</li>
            <li>• Lifetime risk is estimated at around 1–2%</li>
            <li>• Significant impact on caregivers and healthcare systems</li>
          </ul>
        </div>
      </div>

      <div className="glass-panel p-6 space-y-3 border-medical-warning/30 border">
        <div className="flex items-center gap-2 text-medical-warning text-sm font-semibold">
          <AlertCircle className="h-4 w-4" />
          Importance of Early Diagnosis
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          Early and accurate diagnosis is critical. While there is currently no
          cure for Parkinson&apos;s disease, early treatment can significantly
          reduce symptoms, improve quality of life and enable patients to plan
          proactively.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          AI-powered tools like this research platform can help flag individuals
          who may be at elevated risk, prompting thorough clinical assessment
          and follow-up. However, they are always meant to supplement, not
          replace, expert medical judgment.
        </p>
      </div>
    </div>
  );
}

