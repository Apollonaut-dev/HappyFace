import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "1rem",
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: '12rem',
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
}));

export default function Navigation() {
  const [drawerState, toggleDrawer] = useState(false);
  const classes = useStyles();

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
                    <Link className={classes.link} to={'/profile'}>My Profile</Link>
                  </ListItemText>
                </ListItem>
                {/* link 3 */}
                <ListItem>
                  <ListItemIcon><ListIcon /></ListItemIcon>
                  <ListItemText>
                    <Link className={classes.link} to={'/account'}>Account Settings</Link>
                  </ListItemText>
                </ListItem>
              </List>
            }
          </Drawer>
          <Typography variant="h6" className={classes.title}>
            Happey Face
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}