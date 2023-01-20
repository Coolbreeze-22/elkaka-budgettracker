import React from "react";
import './Main.css';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from "@mui/material";
import Form from "../Form/Form";
import Lists from "../Lists/Lists";

const Main = () => {
  return (
    <div className="main">
    <Card className="main">
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance $100
        </Typography>
        <Typography variant="subtitle1" style={{ lineHeight: "1.5cm", marginTop: '20px'}}>
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
