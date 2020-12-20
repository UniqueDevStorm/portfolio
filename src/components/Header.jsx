import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, ListItem, ListItemText } from '@material-ui/core'
import Brightness7 from '@material-ui/icons/Brightness7'
import Menu from '@material-ui/icons/Menu'

const Header = ({ toggleDarkMode }) => {
    const [side, setSide] = React.useState(false)

    return (
        <>
            <AppBar color="transparent" style={{ boxShadow: 'none' }}>
                <Toolbar>
                    <IconButton color="inherit" onClick={() => setSide(true)}>
                        <Menu />
                    </IconButton>
                    <div style={{ flexGrow: 1 }} />
                </Toolbar>
            </AppBar>
            <Drawer open={side} onClose={() => setSide(false)} style={{ display: 'flex', flexDirection: 'column' }}>
                <ListItem href="#home" button component="a" onClick={() => setSide(false)}>
                    <ListItemText primary="홈" />
                </ListItem>
                <ListItem href="#Doit" button component="a" onClick={() => setSide(false)}>
                    <ListItemText primary="Do it" />
                </ListItem>
                <ListItem href="#Project" button component="a" onClick={() => setSide(false)}>
                    <ListItemText primary="Projects" />
                </ListItem>
                <div style={{ flexGrow: 1 }} />
                <Toolbar>
                    <IconButton color="inherit" onClick={toggleDarkMode}>
                        <Brightness7 />
                    </IconButton>
                </Toolbar>
            </Drawer>
        </>
    );
};

export default Header;