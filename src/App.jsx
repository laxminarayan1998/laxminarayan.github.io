import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModernPortfolio from "./components/ModernPortfolio";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ModernPortfolio />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
