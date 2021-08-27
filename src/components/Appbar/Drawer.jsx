import React from 'react';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Avatar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  drawer: { backgroundColor: '#111', width: '50%' },
  toolbar: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em'
    }
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  drawerIcon: { fill: theme.palette.primary.main },
  drawerList: { marginLeft: '1em' },
  drawerItemText: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1
    }
  },
  avatar: { marginRight: '0.5em' }
}));

const renderList = (
  routes,
  setDrawerOpen,
  setTabIndex,
  tabIndex,
  classes,
  signOutStart,
  currentUser
) =>
  routes.map((r, i) =>
    r !== null ? (
      r.name === 'PROFILE' ? (
        <ListItem
          divider
          key={i}
          button
          component={Link}
          to={r.route}
          onClick={() => {
            setDrawerOpen(false);
            setTabIndex(i);
          }}
          selected={tabIndex === i}
          classes={{ selected: classes.drawerItemSelected }}
        >
          <Avatar
            alt='Remy Sharp'
            src='/broken-image.jpg'
            className={classes.avatar}
          >
            {currentUser.displayName[0]}
          </Avatar>
          <ListItemText className={classes.drawerItemText} disableTypography>
            {currentUser.displayName}
          </ListItemText>
        </ListItem>
      ) : r.name === 'SIGN OUT' ? (
        <ListItem
          key={i}
          divider
          button
          onClick={() => {
            setDrawerOpen(false);
            signOutStart();
          }}
        >
          <ListItemText className={classes.drawerItemText} disableTypography>
            SIGN OUT
          </ListItemText>
        </ListItem>
      ) : (
        <ListItem
          divider
          key={i}
          button
          component={Link}
          to={r.route}
          onClick={() => {
            setDrawerOpen(false);
            setTabIndex(i);
          }}
          selected={tabIndex === i}
          classes={{ selected: classes.drawerItemSelected }}
        >
          <ListItemText className={classes.drawerItemText} disableTypography>
            {r.name}
          </ListItemText>
        </ListItem>
      )
    ) : null
  );

export default function Drawer({
  routes,
  tabIndex,
  drawerOpen,
  currentUser,
  setTabIndex,
  setDrawerOpen,
  signOutStart
}) {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={drawerOpen}
        classes={{ paper: classes.drawer }}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
      >
        <div className={classes.toolbar} />
        <List className={classes.drawerList}>
          {renderList(
            routes,
            setDrawerOpen,
            setTabIndex,
            tabIndex,
            classes,
            signOutStart,
            currentUser
          )}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
}
