import React, { useState } from 'react';

import classes from './index.css';

import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  List as ListIcon,
  Edit as EditIcon
} from '@material-ui/icons';

import * as ROUTES from '../../constants/routes';

export default function Navigation() {
  const [drawerState, toggleDrawer] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit">
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerState} onClose={e => toggleDrawer(false)}>
            {
              <List className={classes.list}>
                {/* link 1 */}
                <ListItem>
                  <ListItemIcon><ListIcon /></ListItemIcon>
                  <ListItemText>
                    <Link className={classes.link} to={ROUTES.ROOT}>Home</Link>
                  </ListItemText>
                </ListItem>
                {/* link 2 */}
                <ListItem>
                  <ListItemIcon><ListIcon /></ListItemIcon>
                  <ListItemText>
                    <Link className={classes.link} to={'/profile'}>Profile</Link>
                  </ListItemText>
                </ListItem>
              </List>
            }
          </Drawer>
          <Typography variant="h6" className={classes.title}>
            Happy Face
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}