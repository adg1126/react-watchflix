import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  useScrollTrigger,
  AppBar,
  Toolbar
} from '@material-ui/core';

import history from '../history';
import watchFlixLogo from '../assets/images/watchflix-logo.png';

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
  toolbar: { width: '100vw' },
  logo: {
    width: '120px',
    objectFit: 'contain',
    cursor: 'pointer',
    marginLeft: '2em',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0.5em'
    }
  }
}));

export default function Appbar() {
  const classes = useStyles();
  const [showBackground, setShowBackground] = useState(false);

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
            className={[
              classes.toolbar,
              showBackground && classes.appBarDark
            ].join(' ')}
            disableGutters
          >
            <img
              className={classes.logo}
              src={watchFlixLogo}
              alt='logo'
              onClick={() => history.push('/')}
            />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
}
