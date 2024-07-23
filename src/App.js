import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, CssBaseline, AppBar, Toolbar, Typography } from '@mui/material';
import Products from './Products';
import Purchases from './Purchases';
import SignIn from './SignIn';
import Register from './Register';
import PrivateRoute from './PrivateRoute'; // Import the PrivateRoute component


const drawerWidth = 240;

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" style={{ zIndex: 1201 }}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Flowing Fusion
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          style={{ width: drawerWidth, flexShrink: 0 }}
          PaperProps={{ style: { width: drawerWidth } }}
        >
          <Toolbar />
          <div style={{ overflow: 'auto' }}>
            <List>
              <ListItem button component={Link} to="/products">
                <ListItemText primary="Products" />
              </ListItem>
              <ListItem button component={Link} to="/purchases">
                <ListItemText primary="Purchases" />
              </ListItem>
              <ListItem button component={Link} to="/signin">
                <ListItemText primary="Sign In" />
              </ListItem>
              <ListItem button component={Link} to="/register">
                <ListItemText primary="Register" />
              </ListItem>
            </List>
          </div>
        </Drawer>
        <main style={{ flexGrow: 1, padding: '16px', marginLeft: drawerWidth }}>
          <Toolbar />
          <Routes>
            <Route path="/products" element={<PrivateRoute element={Products} />} />
            <Route path="/purchases" element={<PrivateRoute element={Purchases} />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
