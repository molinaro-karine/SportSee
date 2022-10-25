import React from "react";
import logo from "../../assets/logo.svg";
import "./nav.css";
import { Link } from "react-router-dom";

/**
 * Navigation isn't already functional
 * @returns nav with horizontal navigation bar
 */

function Nav() {
  return (
    <header className="nav">
      <Link to="/">
        <img className="nav_logo" src={logo} alt="logo SportSee" />
      </Link>

      <nav className="nav_links">
        <Link className="nav-link" to="/id/accueil">
          Accueil
        </Link>
        <Link className="nav-link" to="/id/profil">
          Profil
        </Link>
        <Link className="nav-link" to="/id/reglage">
          Réglage
        </Link>
        <Link className="nav-link" to="/id/communaute">
          Communauté
        </Link>
      </nav>
    </header>
  );
}

export default Nav;
