import "./SkillCard.scss";
import data from "../../data/skill.json";
import { createPortal } from "react-dom";
import ModalCard from "../ModalCard/ModalCard";
import { useState } from "react";

export default function SkillCard({ index }) {
  const [showModal, setShowModal] = useState(false);
  const dataIndex = data[index];
  return (
    <>
      <section className="card" onClick={() => setShowModal(true)}>
        <div className="card__header">
          <h2 className="card__header__title">Langage :</h2>
          <h2 className="card__header__langage">{dataIndex.langage}</h2>
        </div>
        <img src={dataIndex.logo} alt="img" className="card__img" />
      </section>
      {showModal &&
        createPortal(
          <ModalCard closeModal={() => setShowModal(false)} data={dataIndex} />,
          document.body
        )}
    </>
  );
}
