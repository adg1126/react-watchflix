import React, { useState, useEffect, useMemo } from 'react';
import history from '../../history';
import _ from 'lodash';
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  useScrollTrigger,
  AppBar,
  Toolbar,
  Grid
} from '@material-ui/core';

import watchFlixLogo from '../../assets/images/watchflix-logo.png';
import TabsContainer from '../../containers/TabsContainer';
import DrawerContainer from '../../containers/DrawerContainer';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles(theme => ({
  appBar: {
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    left: 0,
    [theme.breakpoints.down('md')]: {
      backgroundColor: '#111'
    }
  },
  appBarDark: {
    backgroundColor: '#111'
  },
  toolbar: {
    [theme.breakpoints.down('md')]: {
      marginBottom: '4em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '2em'
    }
  },
  tabsContainer: {
    margin: '0 2em',
    [theme.breakpoints.down('md')]: {
      margin: '0 0.5em'
    }
  },
  logo: {
    width: '120px',
    objectFit: 'contain',
    cursor: 'pointer'
  }
}));

export default function Appbar({ currentUser, setTabIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [showBackground, setShowBackground] = useState(false);

  const { pathname } = history.location;

  const memoizedRoutes = useMemo(
    () => [
      { name: 'HOME', route: '/' },
      { name: 'ABOUT', route: '/about' },
      { name: 'MOVIES', route: '/movies' },
      { name: 'TV SHOWS', route: '/tv_shows' },
      !_.isEmpty(currentUser) ? { name: 'PROFILE', route: '/profile' } : null,
      !_.isEmpty(currentUser)
        ? { name: 'SIGN OUT', route: '' }
        : { name: 'SIGN IN', route: '/signin' }
    ],
    [currentUser]
  );

  useEffect(() => {
    let nullCount = 0;
    memoizedRoutes.forEach((r, i) => {
      if (r !== null) {
        if (r.route === pathname) setTabIndex(i - nullCount);
      } else {
        nullCount += 1;
      }
    });
  }, [pathname, memoizedRoutes, setTabIndex]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setShowBackground(true) : setShowBackground(false);
    });

    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar
            className={showBackground ? classes.appBarDark : ''}
            disableGutters
          >
            <Grid
              container
              direction='row'
              justifyContent='space-between'
              className={classes.tabsContainer}
            >
              <Grid item>
                <img
                  className={classes.logo}
                  src={watchFlixLogo}
                  alt='logo'
                  onClick={() => {
                    history.push('/');
                    setTabIndex(0);
                  }}
                />
              </Grid>
              <Grid item>
                {matchesSM ? (
                  <DrawerContainer routes={memoizedRoutes} />
                ) : (
                  <TabsContainer routes={memoizedRoutes} />
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbar} />
    </>
  );
}
