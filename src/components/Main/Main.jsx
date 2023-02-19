import React from "react";
import './Main.css';
import { Card, CardHeader, CardContent, Typography, Divider } from "@mui/material";
import Form from "../Form/Form";
import { ExpenseTrackerContext } from "../../context/context";
import { useContext } from "react";
import InfoCard from "../InfoCard";


const Main = () => {
  const { balance } = useContext(ExpenseTrackerContext);
  
  return (
    <div className="main">
    <Card className="main">
      <CardHeader title="Budget Tracker" subheader="Powered by Speechly" sx={{textAlign: 'center'}} />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance ${balance}
        </Typography>
        <Typography variant="subtitle1" style={{ lineHeight: "1.0cm", marginTop: '10px', color:"blue"}}>
          {InfoCard()}
        </Typography>
        <Divider />
        <Form />
      </CardContent>

      <CardContent className="cardContent">
        {/* <Grid container spacing={2}>
          <Grid item xs={12}>
            <Lists />
          </Grid>
        </Grid> */}
      </CardContent>
    </Card>
    </div>
  );
};

export default Main;
