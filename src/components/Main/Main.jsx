import React from "react";
import './Main.css';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from "@mui/material";
import Form from "../Form/Form";
import Lists from "../Lists/Lists";
import { ExpenseTrackerContext } from "../../context/context";
import { useContext } from "react";


const Main = () => {
  const { balance } = useContext(ExpenseTrackerContext);
  
  return (
    <div className="main">
    <Card className="main">
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance {balance}
        </Typography>
        <Typography variant="subtitle1" style={{ lineHeight: "1.0cm", marginTop: '10px', color:"blue"}}>
          {/* {infoCard} */}
          Try saying : Add income for 100$ in category salary for monday
        </Typography>
        <Divider />
        <Form />
      </CardContent>

      <CardContent className="cardContent">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Lists />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </div>
  );
};

export default Main;
