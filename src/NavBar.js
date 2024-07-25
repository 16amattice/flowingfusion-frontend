// src/NavBar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { auth } from './firebaseConfig';

const drawerWidth = 240;

const NavBar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate('/signin');
  };

  return (
    <div>
      <AppBar position="fixed" style={{ marginLeft: drawerWidth, width: `calc(100% - ${drawerWidth}px)` }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            My App
          </Typography>
          {user ? (
            <>
              <Button color="inherit" component={Link} to="/profile">
                Profile
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/signin">
                Sign In
              </Button>
              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        style={{ width: drawerWidth }}
        variant="permanent"
        anchor="left"
        classes={{ paper: { width: drawerWidth } }}
      >
        <Toolbar />
        <div>
          <List>
            <ListItem button component={Link} to="/products">
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem button component={Link} to="/purchases">
              <ListItemText primary="Purchases" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
