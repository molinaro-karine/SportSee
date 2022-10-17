import "./Home.css";
import Header from "../components/header/Header";
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar";
import KeyCard from "../components/KeyCards/KeyCard";

import iconCalories from "../assets/calories-icon.svg";
import iconProtein from "../assets/protein-icon.svg";
import iconCarbs from "../assets/carbs-icon.svg";
import iconLipide from "../assets/fat-icon.svg";

function Home() {
  return (
    <div className="App">
      <Nav />
      <div className="App-dashboard">
        <Sidebar />
        <main>
          <Header />
          <div className="infos">
            <div className="infos-graphics">
              <div className="infos-graphics_barchart">
                <h2 className="barchart-title">Activité quotidienne</h2>
                <div className="barchart-legend">
                  <p className="barchart-legend_poids barchart-legendName">
                    <span className="barchart-legendName_circle"></span>Poids
                    (kg)
                  </p>
                  <p className="barchart-legend_calories barchart-legendName">
                    <span className="barchart-legendName_circle"></span>
                    Calories brûlées (kCal)
                  </p>
                </div>
              </div>
              <div className="infos-graphics_other">
                <div className="linechart">
                  <h2 className="linechart-title">
                    Durée moyenne des sessions
                  </h2>
                </div>
                <div className="radarchart"></div>
                <div className="radialchart">
                  <h2 className="radialchart-title">Score</h2>
                </div>
              </div>
            </div>
            <div className="infos-nutrients">
              <KeyCard icon={iconCalories} />
              <KeyCard icon={iconProtein} />
              <KeyCard icon={iconCarbs} />
              <KeyCard icon={iconLipide} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
