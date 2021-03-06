import React, { useState } from 'react';
import { secondsToTime } from '../utils/funcitions';
import { imgBaseUrl } from '../utils/baseurls';
import _ from 'lodash';
import numeral from 'numeral';
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Grid,
  Typography,
  Button
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { Star } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  container: {
    height: '488px',
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
  fontGrey: {
    color: '#fff',
    fontWeight: '400',
    opacity: '0.5'
  },
  fontSemiBold: { fontWeight: 'semi-bold' },
  title: { fontWeight: 'bold' },
  button: {
    ...theme.button,
    ...theme.buttonRedAnimation,
    textDecoration: 'none',
    fontSize: '1.05em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9em'
    }
  },
  showMoreSpan: {
    cursor: 'pointer'
  }
}));

export default function Banner({ banner, mediaType, bannerButtons }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [truncate, setTruncate] = useState(true);

  const truncateText = (str, n) =>
    str.length > n ? `${str.substr(0, n - 1)}...` : str;

  const { h, m } = secondsToTime(banner?.runtime * 60);

  const handleClickTruncate = () => setTruncate(!truncate);

  return !_.isEmpty(banner) ? (
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
              <Typography className={[classes.fontGrey].join(' ')} variant='h6'>
                {mediaType === 'tv' ? 'TV SHOW' : 'MOVIE'}
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction='row'
              alignItems='flex-end'
              spacing={2}
            >
              <Grid item>
                <Typography
                  className={[classes.fontWhite, classes.title].join(' ')}
                  variant={matchesSM ? 'h5' : 'h4'}
                >
                  {banner?.title || banner?.name || banner?.original_name}
                </Typography>
              </Grid>
              <Grid item>
                {!_.isEmpty(banner.release_date) ? (
                  <Typography variant='h6' className={classes.fontGrey}>
                    ({new Date(banner?.release_date).getFullYear()})
                  </Typography>
                ) : (
                  <Typography variant='h6' className={classes.fontGrey}>
                    (
                    {`${new Date(
                      banner?.first_air_date
                    ).getFullYear()} - ${new Date(
                      banner?.last_air_date
                    ).getFullYear()}`}
                    )
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                className={[classes.fontWhite, classes.fontSemiBold].join(' ')}
              >
                {banner?.genres
                  .map(({ name }) => name.toUpperCase())
                  .join(', ')}
              </Typography>
            </Grid>
            <Grid item>
              {!_.isEmpty(banner.runtime) ? (
                <Typography
                  variant='body1'
                  className={[classes.fontWhite].join(' ')}
                >
                  {`${h}h ${m}m`}
                </Typography>
              ) : (
                <Typography
                  variant='body1'
                  className={[classes.fontWhite].join(' ')}
                >
                  {`${banner?.number_of_seasons} SEASONS, ${banner?.number_of_episodes} EPISODES`}
                </Typography>
              )}
            </Grid>
            <Grid item>
              <Typography variant='body1' className={classes.fontWhite}>
                {truncate
                  ? truncateText(banner?.overview, 100)
                  : banner.overview}{' '}
                <span
                  onClick={handleClickTruncate}
                  className={[classes.showMoreSpan, classes.fontGrey].join(' ')}
                >
                  {truncate ? '[Show More]' : '[Show Less]'}
                </span>
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction='row'
              alignItems='center'
              spacing={1}
            >
              <Grid item>
                <Rating
                  value={banner.vote_average / 2}
                  precision={0.1}
                  emptyIcon={
                    <Star
                      style={{ color: '#fff', opacity: '0.4' }}
                      fontSize='inherit'
                    />
                  }
                  readOnly
                />
              </Grid>
              <Grid item>
                <Typography variant='body1' className={classes.fontWhite}>
                  {numeral(banner.vote_average / 2).format('0.0')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' className={classes.fontWhite}>
                  ({numeral(banner.vote_count).format('0,0')})
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction='row'
              alignItems='center'
              spacing={2}
            >
              {bannerButtons?.map((b, i) => (
                <Grid item key={i}>
                  <Button
                    onClick={b?.handleClickPlay}
                    href={b?.href}
                    startIcon={b.icon}
                    className={classes.button}
                  >
                    {b.text}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.bannerImage}
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${imgBaseUrl}/${banner.backdrop_path})`,
            backgroundPosition: 'top right'
          }}
        />
        <Grid item className={classes.bannerHorizontalOverlay} />
      </Grid>
    </Grid>
  ) : null;
}
