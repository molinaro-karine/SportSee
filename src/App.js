import React from "react";
import "./pages/styles/App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

function App() {
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
            <div className="infos-nutrients"></div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
