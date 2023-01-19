import React from 'react';
import './Details.css';
import {Card, CardHeader, CardContent, Typography } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';


const Details = ( { title } ) => {
  return (
    <div className='ebuka'>
 <Card
 className={title === 'Income' ? "income" : "expense"}
//  sx={{backgroundColor:"#5252e4"}}
 >
    <CardHeader title={title} />
    <CardContent>
        <Typography variant="h5">$50</Typography>
        {/* <Doughnut data="Data" /> */}
    </CardContent>
 </Card> 
 </div>
  )
}

export default Details