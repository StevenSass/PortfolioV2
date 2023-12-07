import "./ModalProjet.scss";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ModalProjet({ closeModal, data }) {
  const [isHovered, setIsHovered] = useState(false);
  const [count, setCount] = useState(0);

  const handleCountChange = (newCount) => {
    if (newCount < 0) {
      setCount(data.pictures.length - 1);
    } else if (newCount >= data.pictures.length) {
      setCount(0);
    } else {
      setCount(newCount);
    }
  };

  const handlePrevClick = () => {
    handleCountChange(count - 1);
  };

  const handleNextClick = () => {
    handleCountChange(count + 1);
  };

  useEffect(() => {
    let intervalId;
    if (!isHovered) {
      intervalId = setInterval(() => {
        handleNextClick();
      }, 5000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [count, isHovered]);

  const dots = [];
  for (let i = 0; i < data.pictures.length; i++) {
    const isSelected = i === count ? "selected" : "";
    dots.push(
      <div key={i} className={`modal__carousel__dots__dot ${isSelected}`}></div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className="overlay" onClick={closeModal}></div>
      <div className="modal">
        <div className="modal__close">
          <div className="modal__close__button" onClick={closeModal}>
            <CloseRoundedIcon />
          </div>
        </div>
        <div className="modal__content">
          <div className="modal__content__header">
            <h2>{data.projetname}</h2>
          </div>
          <div
            className="modal__carousel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className="modal__carousel__section">
              <KeyboardArrowLeftRoundedIcon
                className="modal__carousel__section__arrow-left"
                onClick={handlePrevClick}
              />
              <img
                src={data.pictures[count]}
                alt=""
                className="modal__carousel__section__img"
              />
              <KeyboardArrowRightRoundedIcon
                className="modal__carousel__section__arrow-right"
                onClick={handleNextClick}
              />
            </div>
            <div className="modal__carousel__dots">{dots}</div>
          </div>
          <ul className="modal__tags">
            {data.langage.map((langage, index) => (
              <li key={index + langage}>{langage}</li>
            ))}
          </ul>
          <div className="modal__description">{data.description}</div>
        </div>
      </div>
    </motion.div>
  );
}
