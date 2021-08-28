import React from 'react';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  Avatar,
  Button,
  Tabs as MuiTabs,
  Tab
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  signIn: {
    ...theme.button,
    ...theme.buttonRedAnimation,
    textDecoration: 'none',
    fontSize: '1.05em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9em'
    }
  },
  profile: { color: '#fff' },
  avatar: {
    marginRight: '0.5em',
    backgroundColor: theme.palette.primary.main,
    opacity: '0.8'
  },
  profileTab: {
    '& .MuiTab-wrapper': {
      flexDirection: 'row',
      justifyContent: 'flex-start'
    }
  }
}));

export default function Tabs({
  routes,
  currentUser,
  tabIndex,
  signOutStart,
  setTabIndex
}) {
  const classes = useStyles();

  const handleCickSignout = () => {
    signOutStart();
  };

  const handleChange = (e, i) => {
    setTabIndex(i);
  };

  return (
    <MuiTabs
      TabIndicatorProps={{ style: { backgroundColor: 'rgba(0,0,0,0)' } }}
      value={tabIndex}
      onChange={handleChange}
    >
      {routes.map((r, i) =>
        r !== null ? (
          r.name === 'PROFILE' ? (
            <Tab
              className={classes.profileTab}
              key={i}
              icon={
                <Avatar
                  alt={currentUser.displayName}
                  src='/broken-image.jpg'
                  className={classes.avatar}
                >
                  {currentUser.displayName[0]}
                </Avatar>
              }
              component={Link}
              to={r.route}
              label={currentUser.displayName}
            />
          ) : r.name === 'SIGN OUT' ? (
            <Tab
              key={i}
              component={Button}
              onClick={handleCickSignout}
              label='SIGN OUT'
            />
          ) : (
            <Tab key={i} component={Link} to={r.route} label={r.name} />
          )
        ) : null
      )}
    </MuiTabs>
  );
}
