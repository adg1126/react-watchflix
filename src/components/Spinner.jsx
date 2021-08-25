import React from 'react';
import { makeStyles, Grid, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  container: { width: '100vw', height: '100vh' },
  spinner: {}
});

export default function Spinner() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.container}
      justifyContent='center'
      alignItems='center'
    >
      <Grid item>
        <CircularProgress size={70} className={classes.spinner} />
      </Grid>
    </Grid>
  );
}
