import "./ModalCard.scss";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { motion } from "framer-motion";

export default function ModalCard({ closeModal, data }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className="overlayCard" onClick={closeModal}></div>
      <div className="modalCard">
        <div className="modalCard__close">
          <div className="modalCard__close__button" onClick={closeModal}>
            <CloseRoundedIcon />
          </div>
        </div>
        <div className="modalCard__content">
          <div className="modalCard__content__header">
            <h2>{data.langage}</h2>
            <img src={data.logo} alt="" />
          </div>
          <ul className="modalCard__content__text">
            {data.description.map((langage, i) => (
              <li key={i + langage}>{langage}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
