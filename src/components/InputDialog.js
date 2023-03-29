import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

export default function InputDialog() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log('User input:', inputValue);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open input dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Input Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your text here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="input"
            label="User Input"
            type="text"
            fullWidth
            variant="standard"
            value={inputValue}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
