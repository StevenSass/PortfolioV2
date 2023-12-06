import Dropdown from "../Dropdown/Dropdown";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__title">
        <h1 className="header__title--last">Sass</h1>
        <p className="header__title--first">Steven</p>
      </div>

      <Dropdown />
    </header>
  );
}
