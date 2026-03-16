import { motion } from "framer-motion";
import { Users, GraduationCap, UserCircle2 } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="space-y-8">
      <div className="glass-panel p-6 md:p-8 space-y-3">
        <div className="flex items-center gap-2 text-medical-blue text-sm font-semibold">
          <Users className="h-4 w-4" />
          Project Team
        </div>
        <p className="text-sm text-slate-600">
          This AI-based Parkinson&apos;s Disease Detection System was developed
          as a university minor project, designed to showcase how modern machine
          learning and web technologies can support clinical research.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3 }}
          className="glass-panel p-6 space-y-3 md:col-span-2"
        >
          <div className="flex items-center gap-2 text-medical-teal text-sm font-semibold">
            <GraduationCap className="h-4 w-4" />
            Academic Details
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <p className="text-xs text-slate-500">Project Title</p>
              <p className="font-semibold text-slate-900">
                AI-Based Parkinson&apos;s Disease Detection System
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-500">Student's Name</p>
              <p className="font-semibold text-slate-900">
                Vivek Raj Sahay, Shuvi Kumari, Saumyadeep, Albia Sajid, Aryan Parihar, Adya Abha
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-500">University / Institute</p>
              <p className="font-semibold text-slate-900">
                KIIT University
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-500">Department</p>
              <p className="font-semibold text-slate-900">
                CSCE
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="glass-panel p-6 space-y-3"
        >
          <div className="flex items-center gap-2 text-medical-blue text-sm font-semibold">
            <UserCircle2 className="h-4 w-4" />
            Guide / Supervisor
          </div>
          <div className="space-y-1 text-sm">
            <p className="text-xs text-slate-500">Faculty Guide</p>
            <p className="font-semibold text-slate-900">
              Prasenjit Maiti
            </p>
            <p className="text-xs text-slate-500">Designation</p>
            <p className="font-semibold text-slate-900">
              Assistant Professor
            </p>
            <p className="text-xs text-slate-500 mt-2">Department</p>
            <p className="font-semibold text-slate-900">
              School of Computer Engineering
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

