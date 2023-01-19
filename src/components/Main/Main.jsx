import React from "react";
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from "@mui/material";
import Form from "../Form/Form";

const Main = () => {
  return (
    <Card className="root">
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
            {/* <List /> */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
