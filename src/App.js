// import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';

import Details from './components/Details/Details';
import Main from './components/Main/Main';

import { PushToTalkButton, PushToTalkButtonContainer,
  // ErrorPanel      i removed errorpanel bcos it is old fashioned
 } from '@speechly/react-ui';


function App() {
  return (
    <div>
      <Grid container spacing={0} gap={1} justifyContent="center" alignItems="center" >
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
      
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        {/* <ErrorPanel /> */}
      </PushToTalkButtonContainer>
      
    </div>
  );
}

export default App;
