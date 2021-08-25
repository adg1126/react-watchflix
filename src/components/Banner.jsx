import React, { useEffect } from 'react';
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Grid,
  Typography,
  Button
} from '@material-ui/core';
import { imgBaseUrl } from '../utils/baseurls';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
  container: {
    height: '448px',
    [theme.breakpoints.down('sm')]: {
      height: '500px'
    }
  },
  bannerImage: { height: '448px', width: '75%' },
  bannerVerticalOverlay: {
    position: 'absolute',
    width: '100%',
    height: '448px',
    background:
      'linear-gradient(80deg, #111 30%, #111 15%, #111 5%, rgba(0,0,0,0))'
  },
  bannerHorizontalOverlay: {
    position: 'absolute',
    width: '100%',
    height: '448px',
    background: 'linear-gradient(0deg, #111 0%, #111 0%, #111 1%, transparent)'
  },
  bannerContent: {
    position: 'relative',
    zIndex: 100,
    marginLeft: '2em',
    width: '40%',
    [theme.breakpoints.down('md')]: {
      width: '50%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      marginLeft: '1em'
    }
  },
  fontWhite: { color: '#fff' },
  title: { fontWeight: 'bold' },
  button: {
    ...theme.button,
    ...theme.buttonRedAnimation,
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.05em'
  }
}));

export default function Banner({ fetchBannerMovieStart, bannerMovie }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    fetchBannerMovieStart();
  }, [fetchBannerMovieStart]);

  const truncate = (str, n) =>
    str?.length > n ? `${str.substr(0, n - 1)}...` : str;

  return !_.isEmpty(bannerMovie) ? (
    <Grid container cirection='column' className={classes.container}>
      <Grid item container direction='row' justifyContent='flex-end'>
        <Grid
          item
          container
          direction='column'
          justifyContent={matchesSM ? 'flex-end' : 'center'}
          className={classes.bannerVerticalOverlay}
        >
          <Grid
            container
            direction='column'
            className={classes.bannerContent}
            spacing={2}
          >
            <Grid item>
              <Typography
                className={[classes.fontWhite, classes.title].join(' ')}
                variant='h4'
              >
                {bannerMovie?.title ||
                  bannerMovie?.name ||
                  bannerMovie?.original_name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' className={classes.fontWhite}>
                {truncate(bannerMovie?.overview, 150)}
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction='row'
              alignItems='center'
              spacing={2}
            >
              <Grid item>
                <Button className={classes.button}>Play</Button>
              </Grid>
              <Grid item>
                <Button href='#movies_container' className={classes.button}>
                  VIEW LIBRARY
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.bannerImage}
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${imgBaseUrl}/${bannerMovie?.backdrop_path})`,
            backgroundPosition: 'top right'
          }}
        />
        <Grid item className={classes.bannerHorizontalOverlay} />
      </Grid>
    </Grid>
  ) : null;
}
