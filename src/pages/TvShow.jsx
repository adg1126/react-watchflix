import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import YouTube from 'react-youtube';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';
import MediaRow from '../components/MediaRow';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const useStyles = makeStyles(theme => ({
  mainContainer: {},
  fontWhite: { color: '#fff' },
  moviesSection: {},
  moviesSectionTitle: { margin: '1em 0', fontWeight: 'bold' }
}));

export default function TvShow({
  tvShowId,
  bannerTvShow,
  recommendedTvShows,
  similarTvShows,
  trailerUrl,
  fetchTvShowStart,
  fetchTrailerUrlStart,
  fetchSimilarAndRecommendedTvShowsStart
}) {
  const classes = useStyles();

  useEffect(() => {
    fetchTvShowStart(tvShowId);
    fetchTrailerUrlStart(tvShowId);
    fetchSimilarAndRecommendedTvShowsStart(tvShowId);
  }, [
    tvShowId,
    fetchTvShowStart,
    fetchTrailerUrlStart,
    fetchSimilarAndRecommendedTvShowsStart
  ]);

  const [player, setPlayer] = useState(null);
  const [showPlayer, setShowPlayer] = useState(false);

  const handleClickPlay = () => {
    if (!showPlayer) {
      setShowPlayer(true);
      player.playVideo();
    } else {
      setShowPlayer(false);
      player.pauseVideo();
    }
  };

  const onPlayerReady = e => {
    setPlayer(e.target);
  };

  const bannerButtons = [
    {
      text: showPlayer ? 'HIDE VIEO PLAYER' : 'PLAY',
      icon: <PlayArrow />,
      handleClickPlay: handleClickPlay
    }
  ];

  return !_.isEmpty(bannerTvShow) ? (
    <>
      <Grid
        container
        direction='column'
        spacing={10}
        className={classes.mainContainer}
      >
        <Grid item>
          <Banner
            banner={bannerTvShow}
            mediaType='tv'
            bannerButtons={bannerButtons}
          />
        </Grid>
        <Grid item style={{ display: showPlayer ? 'block' : 'none' }}>
          <YouTube
            videoId={trailerUrl}
            onReady={onPlayerReady}
            opts={{
              height: '400',
              width: '100%',
              playerVars: {
                autoplay: 0
              }
            }}
          />
        </Grid>
        <Grid item container direction='column' alignItems='center'>
          <Grid item container direction='column' style={{ width: '95%' }}>
            <Grid item>
              <Typography
                variant='h5'
                className={[classes.fontWhite, classes.moviesSectionTitle].join(
                  ' '
                )}
              >
                Recommended TV Shows
              </Typography>
            </Grid>
            <Grid item>
              <MediaRow mediaType='tv' mediaArr={recommendedTvShows} />
            </Grid>
          </Grid>
          <Grid item container direction='column' style={{ width: '95%' }}>
            <Grid item>
              <Typography
                variant='h5'
                className={[classes.fontWhite, classes.moviesSectionTitle].join(
                  ' '
                )}
              >
                Similar TV Shows
              </Typography>
            </Grid>
            <Grid item>
              <MediaRow mediaType='tv' mediaArr={similarTvShows} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  ) : null;
}
