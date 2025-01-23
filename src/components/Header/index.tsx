import { NavLink } from "react-router-dom";
import "./styles.scss";

const Header = () => (
  <header className="Header">
    <h1 className="Name">The Rick and Morty</h1>
    <nav className="Navigation">
      <NavLink className="Link" to={"/"}>
        Home
      </NavLink>
      <NavLink className="Link" to={"/Characters"}>
        character
      </NavLink>
      <NavLink className="Link" to={"/Episode"}>
        episode
      </NavLink>
    </nav>
  </header>
);

export default Header;
