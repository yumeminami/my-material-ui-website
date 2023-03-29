import React from 'react';
import Header from './components/Header';
import CardComponent from './components/CardComponent';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import HistoryIcon from '@mui/icons-material/History';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

function App() {
  return (
    <div>
      <Header />
      <Stack spacing={2} direction="column" alignItems={'flex-start'}>
        <Button variant="h5" startIcon = {<RestartAltIcon/>}>Reset</Button>
        <Button variant="h5" startIcon = {<HistoryIcon/>}>History</Button>
        <Button variant="h5" startIcon = {<LiveHelpIcon/>}>Help</Button>
        <Button variant="h5" startIcon = {<PrivacyTipIcon/>}>Privacy</Button>
      </Stack>
      <CardComponent />
      <Button variant="contained" color="primary" style={{ display: 'block', margin: '20px auto' }}>
        Click me!
      </Button>
      {/* <Button variant="contained" endIcon={<SendIcon />} justify="center" >
        Send
      </Button> */}
    </div>
  );
}

export default App;
