import React from "react";
//import PropTypes from "prop-types";
import "./Header.css";

export default function Header({ firstName }) {
  return (
    <header className="header">
      <h1 className="header-title">
        Bonjour
        <span className="header-title_name"> {firstName}</span>
      </h1>
      <p className="header-text">
        Félicitation ! Vous avez explosé vos objectifs hier
      </p>
    </header>
  );
}
