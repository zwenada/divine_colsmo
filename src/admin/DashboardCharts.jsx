import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const barData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Tarot Readings",
      data: [12, 19, 3, 5, 2],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const pieData = {
  labels: ["Love Reading", "Business Reading", "Ritual Magic"],
  datasets: [
    {
      data: [30, 50, 20],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const DashboardCharts = () => {
  return (
    <>
    <div className="container mb-3">
      <div className="row">
        <div className="col-md-6">
          <div className="card" >
            <div className="card-body">
              <h2 className="text-center">Tarot Readings (Bar Chart)</h2>
              <Bar data={barData} style={{ maxHeight: "250px" }} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Card Usage (Pie Chart)</h2>
              <Pie data={pieData} style={{ maxHeight: "250px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default DashboardCharts;
