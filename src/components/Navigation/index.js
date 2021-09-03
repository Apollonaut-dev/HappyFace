import React, { useState } from 'react';
import * as ROUTES from '../../constants/routes';

import classes from './index.module.css';

import { useHistory, Link } from 'react-router-dom';

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
  ExitToApp,
  AccountCircle,
  Notifications
} from '@material-ui/icons';

import { withFirebase } from '../../Firebase';

function Navigation({ firebase }) {
  const history = useHistory();
  const [drawerState, toggleDrawer] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.Toolbar}>
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
                    <Link className={classes.link} to={ROUTES.FEED}>Home</Link>
                  </ListItemText>
                </ListItem>
                {/* link 2 */}
                <ListItem>
                  <ListItemIcon><ListIcon /></ListItemIcon>
                  <ListItemText>
                    <Link className={classes.link} to={ROUTES.PROFILE}>Profile</Link>

                  </ListItemText>
                </ListItem>
              </List>
            }
          </Drawer>
          <Typography variant="h6" className={classes.title}>
            <Link variant="inherit" to={ROUTES.FEED} className={classes.logo}>
              Happy Face
            </Link>
          </Typography>
          <IconButton color='inherit'>
            <Notifications />
          </IconButton>
          <IconButton color='inherit'>
            <Link to={ROUTES.PROFILE}>
              <AccountCircle style={{color: 'white', transform: 'translateY(2px)'}} />
            </Link>
          </IconButton>
          <IconButton
            className={classes.SignoutButton}
            onClick={() => firebase.signOut().then(() => history.replace(ROUTES.AUTH))}
            color='inherit'
          >
            <ExitToApp />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withFirebase(Navigation);