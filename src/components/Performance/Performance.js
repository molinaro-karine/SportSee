import "./performance.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  //ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import switchService from "../../services/SwitchService";

/**
 *
 * @param {number} id
 * @returns user performance radar chart
 */

function Performance({ id }) {
  const [userPerformance, setUserPerformance] = useState({});

  useEffect(() => {
    const ApiCall = switchService(id);
    ApiCall.fetchUserPerformance()
      .then((data) => {
        if (!data) {
          const error = "performance data error";
          throw error;
        }
        setUserPerformance(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const label = [
    "Intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Energie",
    "Cardio",
  ];
  // Customize tick with Label
  function customTick(tick) {
    return label[tick - 1];
  }

  return (
    <div className="performance">
      <RadarChart
        outerRadius={90}
        width={260}
        height={260}
        data={userPerformance.data}
      >
        <PolarGrid
          gridType="polygon"
          polarRadius={[30, 50, 70, 90]}
          radialLines={false}
        />
        <PolarAngleAxis
          dataKey="kind"
          stroke="white"
          tickLine={false}
          tickFormatter={customTick}
          style={{ fontSize: "12px" }}
          cy={3}
        />

        <Radar
          dataKey="value"
          fill="#ff0101"
          fillOpacity={0.7}
          stroke="#ff0101"
        />
      </RadarChart>
    </div>
  );
}

Performance.propTypes = {
  id: PropTypes.number,
};

export default Performance;
