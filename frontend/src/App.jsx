import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { BrainHero } from "./components/BrainHero";
import LandingPage from "./pages/LandingPage";
import AboutParkinsonPage from "./pages/AboutParkinsonPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ResearchPage from "./pages/ResearchPage";
import TeamPage from "./pages/TeamPage";
import ParkinsonPredictor from "./pages/ParkinsonPredictor";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BrainHero />
              <LandingPage />
            </>
          }
        />
        <Route path="/about-parkinson" element={<AboutParkinsonPage />} />
        <Route path="/predict" element={<ParkinsonPredictor />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

