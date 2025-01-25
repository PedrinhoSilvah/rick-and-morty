import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="Header">
      <h1 className="Name">
        Rick <span>and Morty</span>
      </h1>

      <button
        className={`HamburgerButton ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>

      <nav className={`Navigation ${isMenuOpen ? "open" : ""}`}>
        <NavLink className="Link" to={"/"} onClick={() => setIsMenuOpen(false)}>
          <span>Ho</span>me
        </NavLink>
        <NavLink
          className="Link"
          to={"/Characters"}
          onClick={() => setIsMenuOpen(false)}
        >
          <span>char</span>acter
        </NavLink>
        <NavLink
          className="Link"
          to={"/Episode"}
          onClick={() => setIsMenuOpen(false)}
        >
          <span>epis</span>ode
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
