// src/NavBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { signOut } from 'firebase/auth';

const NavBar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            My App
          </Typography>
          {user ? (
            <>
              <Typography variant="h6" style={{ marginRight: '16px' }}>
                {user.displayName || user.email}
              </Typography>
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/signin">Sign In</Button>
              <Button color="inherit" component={Link} to="/register">Register</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" anchor="left">
        <List>
          <ListItem button component={Link} to="/products">
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button component={Link} to="/purchases">
            <ListItemText primary="Purchases" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default NavBar;
