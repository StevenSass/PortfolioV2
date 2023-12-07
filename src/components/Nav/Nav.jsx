import "./Nav.scss";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import ChecklistRoundedIcon from "@mui/icons-material/ChecklistRounded";
import ArtTrackRoundedIcon from "@mui/icons-material/ArtTrackRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink className="nav__link" to="/">
        <PermIdentityRoundedIcon />
      </NavLink>
      <NavLink className="nav__link" to="/skill">
        <ChecklistRoundedIcon />
      </NavLink>
      <NavLink className="nav__link" to="/projet">
        <ArtTrackRoundedIcon />
      </NavLink>
      <NavLink className="nav__link" to="/parcours">
        <TimelineRoundedIcon />
      </NavLink>
      <NavLink className="nav__link" to="/contact">
        <SendRoundedIcon />
      </NavLink>
    </nav>
  );
}
