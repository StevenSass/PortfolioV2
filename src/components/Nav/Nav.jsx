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
      <NavLink className="nav__link" exact to="/PortfolioV2/">
        <PermIdentityRoundedIcon />
      </NavLink>
      <NavLink className="nav__link" exact to="/PortfolioV2/skill">
        <ChecklistRoundedIcon />
      </NavLink>
      <NavLink className="nav__link" exact to="/PortfolioV2/projet">
        <ArtTrackRoundedIcon />
      </NavLink>
      <NavLink className="nav__link" exact to="/PortfolioV2/parcours">
        <TimelineRoundedIcon />
      </NavLink>
      <NavLink className="nav__link" exact to="/PortfolioV2/contact">
        <SendRoundedIcon />
      </NavLink>
    </nav>
  );
}
