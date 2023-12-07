import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Nav from "./components/Nav/Nav";
import Presentation from "./pages/Presentation/Presentation";
import Skill from "./pages/Skill/Skill";
import Contact from "./pages/Contact/Contact";
import Parcours from "./pages/Parcours/Parcours";
import Projet from "./pages/Projet/Projet";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/PortfolioV2/" element={<Presentation />} />
        <Route path="/PortfolioV2/skill" element={<Skill />} />
        <Route path="/PortfolioV2/projet" element={<Projet />} />
        <Route path="/PortfolioV2/parcours" element={<Parcours />} />
        <Route path="/PortfolioV2/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
