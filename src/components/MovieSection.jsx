import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import MovieRow from './MovieRow';

const useStyles = makeStyles(theme => ({
  mainContaienr: {
    margin: '2em',
    overflowX: 'none',
    [theme.breakpoints.down('sm')]: { margin: '1em' }
  },
  fontWhite: { color: '#ffff' },
  title: {
    fontWeight: 'bold'
  }
}));

export default function MovieSection({ title, isLargeRow, movies }) {
  const classes = useStyles();

  return (
    <Grid container direaction='column' className={classes.mainContaienr}>
      <Grid item>
        <Typography
          variant='h5'
          className={[classes.fontWhite, classes.title].join(' ')}
        >
          {title}
        </Typography>
      </Grid>
      <MovieRow movies={movies} isLargeRow={isLargeRow} />
    </Grid>
  );
}
