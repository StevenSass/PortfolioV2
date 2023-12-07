import "./ModalCard.scss";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function ModalCard({ closeModal, data }) {
  return (
    <>
      <div className="overlay" onClick={closeModal}></div>
      <div className="modal">
        <div className="modal__close">
          <div className="modal__close__button" onClick={closeModal}>
            <CloseRoundedIcon />
          </div>
        </div>
        <div className="modal__content">
          <div className="modal__content__header">
            <h2>{data.langage}</h2>
            <img src={data.logo} alt="" />
          </div>
          <ul className="modal__content__text">
            {data.description.map((langage, i) => (
              <li key={i + langage}>{langage}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
