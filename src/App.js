// import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';

import Details from './components/Details/Details';
import Main from './components/Main/Main';


function App() {
  return (
    <div> kaka
      <Grid container spacing={0} gap={2} justifyContent="center" alignItems="center"  style={{ height: '100vh', width: '100vw'}} >
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
