import { motion } from "framer-motion";
import { Sparkles, Waves, Activity } from "lucide-react";

export function BrainHero() {
  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 30,
        ease: "linear"
      }
    }
  };

  return (
    <div className="relative glass-panel overflow-hidden p-6 sm:p-8 lg:p-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-medical-soft/80 px-4 py-1 text-xs font-medium text-medical-blue border border-medical-soft">
            <Sparkles className="h-3 w-3" />
            AI-Enhanced Neurological Screening
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
            AI-Based Parkinson&apos;s Disease{" "}
            <span className="bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent">
              Detection System
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A modern clinical decision-support prototype that uses
            machine&nbsp;learning to analyze motor, vocal and handwriting
            biomarkers for potential early signs of Parkinson&apos;s disease.
            Designed for research, education and future clinical integration.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 text-xs">
            <div className="rounded-2xl bg-white/80 border border-white/60 px-4 py-3 space-y-1">
              <p className="font-semibold text-slate-800">Early Screening</p>
              <p className="text-slate-500">
                Surface subtle patterns before clinical symptoms are obvious.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 border border-white/60 px-4 py-3 space-y-1">
              <p className="font-semibold text-slate-800">Explainable AI</p>
              <p className="text-slate-500">
                Visual feature importance and confidence insights per prediction.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 border border-white/60 px-4 py-3 space-y-1">
              <p className="font-semibold text-slate-800">Research Ready</p>
              <p className="text-slate-500">
                Built for academic evaluation and integration with real models.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-medical-blue/20 via-medical-teal/15 to-slate-900/0 pointer-events-none" />
          <div className="relative h-64 w-64 sm:h-72 sm:w-72">
            <motion.div
              variants={orbitVariants}
              animate="animate"
              className="absolute inset-0 rounded-full border border-medical-blue/20"
            />
            <motion.div
              variants={orbitVariants}
              animate="animate"
              className="absolute inset-4 rounded-full border border-medical-teal/30"
            />
            <motion.div
              variants={orbitVariants}
              animate="animate"
              className="absolute inset-8 rounded-full border border-medical-blue/15"
              style={{ animationDirection: "reverse" }}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-10 rounded-[40%] bg-gradient-to-br from-medical-blue to-medical-teal shadow-glass flex items-center justify-center"
            >
              <div className="relative w-40 h-28">
                {Array.from({ length: 18 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute h-[2px] w-10 bg-white/40 rounded-full"
                    style={{
                      top: `${20 + (i % 6) * 8}%`,
                      left: `${10 + Math.floor(i / 6) * 28}%`,
                      transformOrigin: "left center"
                    }}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scaleX: [0.8, 1.1, 0.8]
                    }}
                    transition={{
                      duration: 3 + (i % 4),
                      repeat: Infinity,
                      delay: i * 0.12
                    }}
                  />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={`node-${i}`}
                    className="absolute h-2 w-2 rounded-full bg-white shadow"
                    style={{
                      top: `${25 + (i % 5) * 12}%`,
                      left: `${15 + Math.floor(i / 5) * 50}%`
                    }}
                    animate={{
                      scale: [0.8, 1.3, 0.8],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{
                      duration: 2.2 + (i % 3),
                      repeat: Infinity,
                      delay: i * 0.18
                    }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/90 border border-white/80 shadow-md flex items-center gap-2 text-xs text-slate-600"
            >
              <Activity className="h-3 w-3 text-medical-teal" />
              <span>Streaming motor &amp; vocal biomarkers</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute top-4 right-0 px-3 py-2 rounded-2xl bg-medical-soft/90 border border-white/70 text-[11px] text-slate-700 shadow-sm"
            >
              <p className="font-semibold text-medical-blue">
                Real-time Risk Index
              </p>
              <p className="text-slate-500">Updated as new data arrives</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute bottom-6 -left-4 px-3 py-2 rounded-2xl bg-white/90 border border-white/70 text-[11px] text-slate-700 shadow-sm"
            >
              <div className="flex items-center gap-1">
                <Waves className="h-3 w-3 text-medical-teal" />
                <span className="font-semibold">Voice Stability</span>
              </div>
              <p className="text-slate-500">Spectral jitter analysis</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

