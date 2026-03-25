import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import AuthPage from "./pages/Authentification";
import Evenements from "./pages/Evenement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/evenements" element={<Evenements/>} /> {/* nouvelle route */}
      </Routes>
    </Router>
  );
}

export default App;
