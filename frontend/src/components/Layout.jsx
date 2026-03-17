import { Link, NavLink } from "react-router-dom";
import { Brain, Activity, LineChart, Microscope, Users } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { to: "/", label: "Overview" },
  { to: "/about-parkinson", label: "About Parkinson's" },
  { to: "/predict", label: "Prediction" },
  { to: "/analytics", label: "Analytics Dashboard" },
  { to: "/research", label: "Research" },
  { to: "/team", label: "Team" }
];

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 bg-medical-light/90 backdrop-blur-md border-b border-white/60">
        <div className="max-w-page flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              className="h-11 w-11 rounded-2xl bg-gradient-to-br from-medical-blue to-medical-teal flex items-center justify-center text-white shadow-lg"
            >
              <Brain className="h-6 w-6" />
            </motion.div>
            <div className="leading-tight">
              <p className="font-semibold text-slate-900">
                AI Parkinson’s Detection
              </p>
              <p className="text-xs text-slate-500">
                Intelligent Neurological Screening Platform
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative px-2 py-1 transition-colors ${
                    isActive
                      ? "text-medical-blue"
                      : "text-slate-600 hover:text-slate-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-medical-blue"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
              <Activity className="h-4 w-4 text-medical-teal" />
              <span>Realtime risk estimation</span>
            </div>
            <Link
              to="/predict"
              className="inline-flex items-center gap-2 rounded-full bg-medical-blue text-white text-sm font-medium px-4 py-2 shadow-md shadow-medical-blue/30 hover:bg-medical-blue/90 transition"
            >
              <LineChart className="h-4 w-4" />
              Try Prediction Model
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="section-padding">
          <div className="max-w-page">{children}</div>
        </div>
      </main>

      <footer className="border-t border-white/70 bg-white/80 backdrop-blur">
        <div className="max-w-page py-8 flex flex-col md:flex-row gap-6 md:items-start md:justify-between text-xs text-slate-500">
          <div className="max-w-md space-y-2">
            <div className="inline-flex items-center gap-2 text-slate-700">
              <Microscope className="h-4 w-4 text-medical-blue" />
              <span className="font-semibold">
                Medical Research Prototype Platform
              </span>
            </div>
            <p>
              This website is an academic prototype demonstrating how artificial
              intelligence can support early Parkinson&apos;s disease screening.
              It is not a certified medical device and must not be used for
              self-diagnosis or clinical decision-making.
            </p>
            <p className="font-semibold text-medical-danger">
              Always consult a qualified neurologist or healthcare professional
              for medical advice.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-slate-700">Links</p>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-medical-blue"
                >
                  Project GitHub Repository
                </a>
              </li>
              <li>© {new Date().getFullYear()} AI Parkinson’s Lab</li>
            </ul>
          </div>

          <div className="space-y-2 max-w-xs">
            <p className="font-semibold text-slate-700">Credits</p>
            <div className="flex items-center gap-2 text-slate-600">
              <Users className="h-4 w-4 text-medical-teal" />
              <span>
                Developed as a minor project in collaboration with{" "}
                <span className="font-semibold">KIIT University</span>.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

