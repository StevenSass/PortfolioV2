import "./ProjetCard.scss";
import { createPortal } from "react-dom";
import { useState } from "react";
import ModalProjet from "../ModalProjet/ModalProjet";

export default function ProjetCard({ data }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section className="card" onClick={() => setShowModal(true)}>
        <div className="card__header">
          <h2 className="card__header__title">Nom :</h2>
          <h2 className="card__header__langage">{data.projetname}</h2>
        </div>
        <img src={data.cover} alt="img" className="card__img" />
      </section>
      {showModal &&
        createPortal(
          <ModalProjet closeModal={() => setShowModal(false)} data={data} />,
          document.body
        )}
    </>
  );
}
