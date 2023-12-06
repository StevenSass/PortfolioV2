import "./Dropdown.scss";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

export default function Dropdown() {
  const setDarkMode = () => {
    document.querySelector("html").setAttribute("theme", "dark");
    localStorage.setItem("selected-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("html").setAttribute("theme", "light");
    localStorage.setItem("selected-theme", "light");
  };

  const selectedTheme = localStorage.getItem("selected-theme");

  if (selectedTheme === "light") {
    setLightMode();
  } else if (selectedTheme === "dark") {
    setDarkMode();
  }

  return (
    <div className="dropdown">
      <div className="dropdown__section">
        <div className="dropdown__section__button">
          <h2>Thèmes</h2>
          <KeyboardArrowRightRoundedIcon />
        </div>

        <div className="dropdown__section__content">
          <p onClick={setLightMode}>Claire</p>
          <p onClick={setDarkMode}>Sombre</p>
        </div>
      </div>
    </div>
  );
}
