import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./nav.css";
import logo from "../../assets/logo.svg";

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} className="nav-logo" alt="logo SportSee" />
      </Link>
      <ul className="nav-links">
        <li className="nav-link">
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/">Profil</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/">Réglage</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/">Communauté</NavLink>
        </li>
      </ul>
    </nav>
  );
}
