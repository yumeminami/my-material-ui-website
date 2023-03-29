import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function ListDividers() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Reset" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="History" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="FAQ" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Privacy Policy & Terms" />
      </ListItem>
    </List>
  );
}