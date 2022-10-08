import React from "react";
import "./styles/nav.css";
import logo from "./../assets/logo.svg";

export default function Nav() {
  return (
    <nav className="nav">
      <img src={logo} alt="bohnome qui court" className="nav-logo" />
      <ul className="nav-links">
        <li className="nav-link">Accueil</li>
        <li className="nav-link">Profil</li>
        <li className="nav-link">Réglage</li>
        <li className="nav-link">Communauté</li>
      </ul>
    </nav>
  );
}
