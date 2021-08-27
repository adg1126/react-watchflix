import React from 'react';
import aboutBackground from '../assets/images/about_background.jpg';
import history from '../history';
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Grid,
  Typography,
  Button
} from '@material-ui/core';
import ImageOverlay from '../components/ImageOverlay';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    background: `url(${aboutBackground}) center no-repeat`,
    backgroundSize: 'cover'
  },
  gradient: {
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.4)',
    backgroundImage:
      ' radial-gradient(ellipse farthest-side at 50% 50%, rgba(0, 0, 0, 0.9), rgba(0,0,0,0.1))'
  },
  content: {
    position: 'absolute',
    zIndex: 1,
    width: '100vw',
    height: '100vh',
    padding: '0 2em'
  },
  text: { textAlign: 'center', color: '#fff' },
  fontBold: { fontWeight: 'bold' },
  button: {
    ...theme.button,
    ...theme.buttonRedAnimation,
    color: '#fff',
    fontSize: '1.05em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9em'
    }
  }
}));

export default function About() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickRedirect = () => {
    history.push('/signin');
  };

  return (
    <ImageOverlay>
      <Grid item>
        <Typography
          variant={matchesSM ? 'h4' : 'h3'}
          className={[classes.title, classes.text, classes.fontBold].join(' ')}
        >
          Unlimited films, TV shows and more.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1' className={[classes.text].join(' ')}>
          Watch anywhere. Cancel at any time.
        </Typography>
      </Grid>
      <Grid item>
        <Button onClick={handleClickRedirect} className={classes.button}>
          Get Started
        </Button>
      </Grid>
    </ImageOverlay>
  );
}
