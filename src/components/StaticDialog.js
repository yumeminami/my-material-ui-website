import React, { useState } from 'react';
import { Box, Paper, TextField, Typography } from '@mui/material';

export default function StaticDialog() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      console.log('User input:', inputValue);
      setInputValue('');
    }
  };

  return (
    <Box maxWidth={'600px'} margin='auto'>
      <Paper
        elevation={3}
        style={{
          padding: '30px',
          margin: '20px',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Static Dialog Window
        </Typography>
        <Typography variant="body1">
          This is a static dialog window that's always visible on the page.
        </Typography>
      </Paper>
      <TextField
        fullWidth
        variant="outlined"
        label="User Input"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleSubmit}
        size="medium"
        style={{
          margin: '0 20px',
          marginBottom: '20px',
        }}
      />
    </Box>
  );
}
