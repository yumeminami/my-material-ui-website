import React from 'react';
import Header from './components/Header';
import CardComponent from './components/CardComponent';
import Button from '@mui/material/Button';
import { Stack, Typography } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import HistoryIcon from '@mui/icons-material/History';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import InputDialog from './components/InputDialog';
import StaticDialog from './components/StaticDialog';

function App() {
  return (
    <div>
      <Header />
      <Stack spacing={2} direction="column" alignItems={'flex-start'}>
        <Button startIcon={<RestartAltIcon />}>
          <Typography variant="text">Reset</Typography>
        </Button>
        <Button startIcon={<HistoryIcon />}>
          <Typography variant="text">History</Typography>
        </Button>
        <Button startIcon={<LiveHelpIcon />}>
          <Typography variant="text">Help</Typography>
        </Button>
        <Button startIcon={<PrivacyTipIcon />}>
          <Typography variant="text">Privacy</Typography>
        </Button>
      </Stack>
      {/* <CardComponent />
      <Button
        variant="contained"
        color="primary"
        style={{ display: 'block', margin: '20px auto' }}
      >
        Click me!
      </Button>  */}
      {/* <InputDialog /> */}
      <StaticDialog />
    </div>
  );
}

export default App;
