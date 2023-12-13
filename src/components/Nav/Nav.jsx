import "./Nav.scss";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import ChecklistRoundedIcon from "@mui/icons-material/ChecklistRounded";
import ArtTrackRoundedIcon from "@mui/icons-material/ArtTrackRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="responsive-nav">
      <nav className="nav">
        <NavLink className="nav__link" exact="true" to="/">
          <PermIdentityRoundedIcon />
        </NavLink>
        <NavLink className="nav__link" exact="true" to="/skill">
          <ChecklistRoundedIcon />
        </NavLink>
        <NavLink className="nav__link" exact="true" to="/projet">
          <ArtTrackRoundedIcon />
        </NavLink>
        <NavLink className="nav__link" exact="true" to="/parcours">
          <TimelineRoundedIcon />
        </NavLink>
        <NavLink className="nav__link" exact="true" to="/contact">
          <SendRoundedIcon />
        </NavLink>
      </nav>
    </div>
  );
}
