import React from "react";
import "./Details.css";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
// just incase you want to use pie instaed of doughnut or both
import useTransactions from "../../useTransactions";

Chart.register(Tooltip, Title, ArcElement, Legend);

const Details = ({ title }) => {
  const { total, chartData } = useTransactions(title);

  return (
    <div className="ebuka">
      <Card className={title === "Income" ? "income" : "expense"}>
        <CardHeader title={`${title} tracker `} subheader="By Coolbreeze" sx={{textAlign: 'center'}} />
        {/* <CardHeader title={title} /> */}
        <CardContent>
          <Typography variant="h5">${total}</Typography>
          {title === "Income" ? (
            <Doughnut data={chartData} />
          ) : (
            <Pie data={chartData} />
          )}
          {/* <Doughnut data={chartData} /> */}
          {/* <Pie data={chartData} /> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
