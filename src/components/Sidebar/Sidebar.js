import yoga from "../../assets/yoga.svg";
import swim from "../../assets/natation.svg";
import cycle from "../../assets/bike.svg";
import bodybuilding from "../../assets/muscu.svg";
import ".//sidebar.css";
import { Link } from "react-router-dom";

/**
 *
 * Sidebar vertical navigation bar isn't already functional
 * @returns Sidebar vertical navigation bar
 */

function Sidebar() {
  return (
    <section className="sidebar">
      <nav className="sidebar_nav">
        <Link className="sidebar-nav-link" to="/id/yoga">
          <img className="logo" src={yoga} alt="logo Yoga" />
        </Link>
        <Link className="sidebar-nav-link" to="/id/swim">
          <img className="logo" src={swim} alt="logo Swim" />
        </Link>
        <Link className="sidebar-nav-link" to="/id/cycle">
          <img className="logo" src={cycle} alt="logo Cycle" />
        </Link>
        <Link className="sidebar-nav-link" to="/id/muscu">
          <img className="logo" src={bodybuilding} alt="logo Muscu" />
        </Link>
      </nav>

      <Link className="sidebar_copy" to="/id">
        Copyright, SportSee 2020
      </Link>
    </section>
  );
}

export default Sidebar;
