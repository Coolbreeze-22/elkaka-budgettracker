// import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';

import Details from './components/Details/Details';
import Main from './components/Main/Main';


function App() {
  return (
    <div>
      <Grid container spacing={0} gap={1} justifyContent="center" alignItems="flex-start" >
        <Grid items xs={12} sm={4} >
          <Details title="Income" />
        </Grid>

        <Grid items xs={12} sm={3.4}>
          <Main />
        </Grid>

        <Grid items xs={12} sm={4}>
          <Details title="Expense" />
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
