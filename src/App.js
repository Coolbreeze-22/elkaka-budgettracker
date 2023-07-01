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
  const { listening, attachMicrophone, start, stop } = useSpeechContext();
  const main = useRef(null);
  const handleScroll = () => main.current.scrollIntoView();

  useEffect(() => {
    if (listening) {
      handleScroll()
    }
  }, [listening]);

  const handleClick = async () => {
    if (listening) {
      await stop();
    } else {
      await attachMicrophone();
      await start();
    }
  };
  
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
        <PushToTalkButton onClick={handleClick} />
      </PushToTalkButtonContainer>
      <PushToTalkButtonContainer>
        <div style={{color: "blue"}}>{listening ? 'Stop' : 'Start'}</div>
      </PushToTalkButtonContainer>
      </div>
  );
}

export default App;
