import "./Home.css";
import Header from "../components/header/Header";
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar";
import KeyCard from "../components/KeyCards/KeyCard";
import Loader from "./Loader";

import iconCalories from "../assets/calories-icon.svg";
import iconProtein from "../assets/protein-icon.svg";
import iconCarbs from "../assets/carbs-icon.svg";
import iconLipide from "../assets/fat-icon.svg";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";
import switchService from "../services/SwitchService";
import Activity from "../components/BarChart/Activity";

function Home() {
  const userId = useParams();
  const userIdInt = parseInt(userId.id);

  const [userDatas, setUserDatas] = useState({});

  const [isDataLoading, setDataLoading] = useState(true);

  const [isError, setIsError] = useState(true);

  useEffect(() => {
    const ApiCall = switchService(userIdInt);
    ApiCall.fetchUserDatas()
      .then((data) => {
        if (!data) {
          setIsError(true);
          const error = "data loading error";
          throw error;
        }
        setIsError(false);
        setUserDatas(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setDataLoading(false);
      });
  }, [userIdInt]);

  if (isDataLoading) return <Loader />;

  if (isError) return <Error />;

  return (
    <div className="App">
      <Nav />
      <div className="App-dashboard">
        <Sidebar />
        <main>
          <Header firstName={userDatas.firstName} />
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
                <Activity id={userIdInt} />
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
              <KeyCard
                icon={iconCalories}
                type="calories"
                am={`${userDatas.calorieCount}kCal`}
              />
              <KeyCard
                icon={iconProtein}
                type="proteines"
                am={`${userDatas.proteinCount}g`}
              />
              <KeyCard
                icon={iconCarbs}
                type="glucides"
                am={`${userDatas.carbohydrateCount}g`}
              />
              <KeyCard
                icon={iconLipide}
                type="lipides"
                am={`${userDatas.lipidCount}g`}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
