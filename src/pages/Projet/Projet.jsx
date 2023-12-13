import "./Projet.scss";
import data from "../../data/project.json";
import ProjetCard from "../../components/ProjetCard/ProjetCard";
import ZoomInRoundedIcon from "@mui/icons-material/ZoomInRounded";
import ZoomOutRoundedIcon from "@mui/icons-material/ZoomOutRounded";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Projet() {
  const [toggleAnimation, setToggleAnimation] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen);
    setToggleAnimation();
  };

  const renderCards = (start, end) => {
    return data
      .slice(start, end)
      .map((item, index) => <ProjetCard key={index} data={item} />);
  };

  return (
    <motion.main
      className="projet"
      initial={{ opacity: 0, x: 200, scale: 0.5 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.7 }}>
      <div className="projet__header">
        <h2>Projet :</h2>
        <h3>
          Voici quelques projets. Si vous souhaitez voir tous mes projets, je
          vous invite à regarder mon{" "}
          <Link to="https://github.com/StevenSass">GitHub</Link>.
        </h3>
      </div>
      {!isOpen ? (
        <motion.div
          className="projet__section"
          initial={toggleAnimation ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <div className="projet__section__simple">{renderCards(0, 3)}</div>
        </motion.div>
      ) : (
        <div className="projet__section">
          <div className="projet__section__simple">{renderCards(0, 3)}</div>
          <motion.div
            className="projet__section__plus"
            key={toggleAnimation ? "0" : "1"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            {renderCards(3, 8)}
          </motion.div>
        </div>
      )}
      <div className="projet__plus" onClick={handleChange}>
        {!isOpen ? (
          <div className="projet__plus__text">
            <p>Affichez Plus </p>
            <ZoomInRoundedIcon />
          </div>
        ) : (
          <div className="projet__plus__text">
            <p>Affichez Moins </p>
            <ZoomOutRoundedIcon />
          </div>
        )}
      </div>
    </motion.main>
  );
}
