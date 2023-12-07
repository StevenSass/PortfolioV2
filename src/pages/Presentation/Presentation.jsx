import "./Presentation.scss";
import { TypeAnimation } from "react-type-animation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Presentation() {
  return (
    <main className="pres">
      <h2 className="pres__hello">Bonjours</h2>
      <div className="pres__identity">
        <h3 className="pres__identity__one">Je m'appelle</h3>
        <h3 className="pres__identity__two">Sass</h3>
        <h3 className="pres__identity__three">Steven</h3>
      </div>

      <TypeAnimation
        sequence={[
          1000,
          "Je suis Développeur Front-End React",
          2000,
          "Je suis Intégrateur Web",
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "2em", display: "inline-block" }}
      />

      <div className="pres__exp--raw">
        <div className="pres__exp">
          <p className="pres__exp__one">+9 mois</p>
          <p className="pres__exp__two">Formation OpenClassroom</p>
        </div>
        <div className="pres__exp">
          <p className="pres__exp__one">+11</p>
          <p className="pres__exp__two">Projets Réalisés</p>
        </div>
      </div>
      <div className="pres__link">
        <LinkedInIcon />
        <GitHubIcon />
      </div>
    </main>
  );
}
