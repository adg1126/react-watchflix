import React from 'react';
import tmdbLogo from '../assets/images/tmdb-logo.svg';
import { makeStyles, Grid, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '2em 0'
  },
  tmdbLogo: {
    width: '150px'
  },
  text: {
    color: '#fff',
    textDecoration: 'none'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      spacing={2}
      className={classes.container}
    >
      <Grid item>
        <img src={tmdbLogo} alt='tmdb logo' className={classes.tmdbLogo} />
      </Grid>
      <Grid item>
        <Typography variant='body1' className={classes.text}>
          <Link
            href='https://github.com/adg1126'
            variant='body1'
            className={classes.text}
          >
            @adg1126
          </Link>
          {' | '}
          <Link
            href='https://github.com/adg1126/netflix-clone-v2'
            variant='body1'
            className={classes.text}
          >
            GitHub
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}
