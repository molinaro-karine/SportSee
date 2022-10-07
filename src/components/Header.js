import React from "react";
import "./styles/Header.css";

export default function Header(props) {
  return (
    <header className="header">
      <h1 className="header-title">
        Bonjour
        <span className="header-title_name">k</span>
      </h1>
      <p className="header-text">
        Félicitation ! Vous avez explosé vos objectifs hier
      </p>
    </header>
  );
}
