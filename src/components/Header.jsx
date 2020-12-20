import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import Brightness7 from '@material-ui/icons/Brightness7'

const Header = ({ toggleDarkMode }) => {
    return (
        <AppBar color="inherit">
            <Toolbar>
                <Typography variant="h6">
                    STORM
                </Typography>
                <div style={{ flexGrow: 1 }} />
                <IconButton color="inherit" onClick={toggleDarkMode}>
                    <Brightness7 />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;