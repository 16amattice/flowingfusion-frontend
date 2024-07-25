import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';

const drawerWidth = 240;

const SideBar = () => {
  return (
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
  );
};

export default SideBar;
