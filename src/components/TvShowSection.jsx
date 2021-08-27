import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import MediaRow from './MediaRow';

const useStyles = makeStyles(theme => ({
  container: {
    margin: '2em',
    overflowX: 'none',
    [theme.breakpoints.down('sm')]: { margin: '1em' }
  },
  fontWhite: { color: '#ffff' },
  title: {
    fontWeight: 'bold'
  }
}));

export default function TvShowSection({ title, isLargeRow, tvShows }) {
  const classes = useStyles();

  return (
    <Grid container direaction='column' className={classes.container}>
      <Grid item>
        <Typography
          variant='h5'
          className={[classes.fontWhite, classes.title].join(' ')}
        >
          {title}
        </Typography>
      </Grid>
      <MediaRow mediaArr={tvShows} mediaType='tv' isLargeRow={isLargeRow} />
    </Grid>
  );
}
