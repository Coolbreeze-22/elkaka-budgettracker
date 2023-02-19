// import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import { PushToTalkButton, PushToTalkButtonContainer,
  // ErrorPanel      i removed errorpanel bcos it is old fashioned and code won't work
 } from '@speechly/react-ui';

import { useEffect, useRef } from 'react';
import { useSpeechContext, 
// SpeechState
 } from '@speechly/react-client';



function App() {
  // the following codes below for const {speechstate} is added so when ever user begins to use speechly, user will be pushed to the Main so user can see what user is saying
  // note: the code has refused to work probably because SpeechState is deprecated, just like errorpanel. i.e problem could be from speechState or SpeechState.
  // But useRef algorithm should be correct. So to narrow down the problem, it should be around speechState === SpeechState.Recording.
  
  const { speechState } = useSpeechContext();
  const main = useRef(null);
  const executeScroll = () => main.current.scrollIntoView();

  useEffect(() => {
    // if(speechState === SpeechState.Recording) {this is the right code to use,but it throws the screen blank, so i'm using the below as a placeholder so i can continue my coding}
    if(speechState) {
      executeScroll();
    }
  
    
  }, [speechState]);
  
  return (
    <div>
      <Grid container spacing={0} gap={1} justifyContent="center" alignItems="center" >
        <Grid items xs={11} sm={4} >
          <Details  title="Income" />
        </Grid>

        <Grid ref={main} items xs={12} sm={3.4}>
          <Main />
        </Grid>

        <Grid items xs={11} sm={4}>
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
