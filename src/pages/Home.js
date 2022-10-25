import "./home.css";
import Error404 from "./Error404";
import Header from "../components/Header/Header";
import KeyCard from "../components/KeyCards/KeyCard";
import Loader from "./Loader";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import switchService from "../services/SwitchService";

import calories from "../assets/calories-icon.svg";
import protein from "../assets/protein-icon.svg";
import carbs from "../assets/carbs-icon.svg";
import fat from "../assets/fat-icon.svg";

import Activity from "../components/Activity/Activity";
import AverageSessions from "../components/AverageSessions/AverageSessions";
import Score from "../components/Score/Score";
import Performance from "../components/Performance/Performance";

/**
 *
 * @returns user personnal dashboard with greetings header, charts and Keycards
 */

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

  if (isError) return <Error404 />;
  /*ajout React.StrictMode*/
  return (
    <section className="dashboard">
      <Header firstName={userDatas.firstName} />

      <div className="dashboard_main">
        <React.StrictMode>
          <Activity id={userIdInt} />

          <AverageSessions id={userIdInt} />
          <Performance id={userIdInt} />
          <Score score={userDatas.score} />

          <KeyCard
            icon={calories}
            type="calories"
            amount={`${userDatas.calorieCount}kCal`}
          />
          <KeyCard
            icon={protein}
            type="proteines"
            amount={`${userDatas.proteinCount}g`}
          />
          <KeyCard
            icon={carbs}
            type="glucides"
            amount={`${userDatas.carbohydrateCount}g`}
          />
          <KeyCard
            icon={fat}
            type="lipides"
            amount={`${userDatas.lipidCount}g`}
          />
        </React.StrictMode>
      </div>
    </section>
  );
}

export default Home;
