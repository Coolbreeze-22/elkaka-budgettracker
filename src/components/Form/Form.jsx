import React from "react";

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography,
} from "@mui/material";

const Form = () => {
  return (
    <Grid container spacing={2}>

      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="salary">Salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField type="number" label="Amount" fullWidth />
      </Grid>

      <Grid item xs={6}>
        <TextField type="date" label="" fullWidth />
      </Grid>

      <Button className="button" variant="outlined" color="primary" fullWidth></Button>      
    </Grid>
  );
};

export default Form;
