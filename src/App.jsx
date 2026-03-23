import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import InstitutionalPartners from "./pages/InstitutionalPartners";
import ContentPartners from "./pages/ContentPartners";
import CorporateLearning from "./pages/CorporateLearning";
import CampusAmbassadors from "./pages/CampusAmbassadors";
import QuizCompetition from "./pages/QuizCompetition";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/404";
import HelpAndSupport from "./pages/HelpAndSupport";
import NGOs from "./pages/NGOs";


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/help" element={<HelpAndSupport />} />
          <Route path="/competition" element={<QuizCompetition />} />
          <Route
            path="/institutional-partners"
            element={<InstitutionalPartners />}
          />
          <Route path="/content-partners" element={<ContentPartners />} />
          <Route path="/ngos" element={<NGOs />} />
          <Route path="/corporate-learning" element={<CorporateLearning />} />
          <Route path="/campus-ambassadors" element={<CampusAmbassadors />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
