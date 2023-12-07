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
        <Route path="/" element={<Presentation />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/parcours" element={<Parcours />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
