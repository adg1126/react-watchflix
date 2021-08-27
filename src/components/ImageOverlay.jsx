import React from 'react';
import aboutBackground from '../assets/images/about_background.jpg';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles({
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
  }
});

export default function ImageOverlay({ children }) {
  const classes = useStyles();

  return (
    <Grid container justifyContent='center' className={classes.container}>
      <Grid item className={classes.gradient} />
      <Grid
        item
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={4}
        className={classes.content}
      >
        {children}
      </Grid>
    </Grid>
  );
}
