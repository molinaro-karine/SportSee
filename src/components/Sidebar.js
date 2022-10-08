import React from "react";
import "./styles/sidebar.css";
import iconYoga from "./../assets/yoga.svg";
import iconNatation from "./../assets/natation.svg";
import iconBike from "./../assets/bike.svg";
import iconMuscu from "./../assets/muscu.svg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-icons">
        <img src={iconYoga} alt="" />
        <img src={iconNatation} alt="" />
        <img src={iconBike} alt="" />
        <img src={iconMuscu} alt="" />
      </div>
      <p className="sidebar-copyright">Copiryght, SportSee 2020</p>
    </div>
  );
}
