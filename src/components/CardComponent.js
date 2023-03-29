import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function CardComponent() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 400, margin: '16px auto' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Welcome to Material-UI!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is an example of a Material-UI Card component. You can customize it to fit your needs.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardComponent;
