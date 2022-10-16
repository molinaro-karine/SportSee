import React from "react";
import "./sidebar.css";
import iconYoga from "../../assets/yoga.svg";
import iconNatation from "../../assets/natation.svg";
import iconBike from "../../assets/bike.svg";
import iconMuscu from "../../assets/muscu.svg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-icons">
        <img src={iconYoga} alt="Logo Yoga" />
        <img src={iconNatation} alt="Logo Natation" />
        <img src={iconBike} alt="Logo Bike" />
        <img src={iconMuscu} alt="Logo Bodybuilding" />
      </div>
      <p className="sidebar-copyright">Copiryght, SportSee 2020</p>
    </div>
  );
}
