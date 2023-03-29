import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
function Header() {
    return (
        <AppBar position="static" color='default' elevation={0}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}> 
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div">
                    Material-UI Example
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
