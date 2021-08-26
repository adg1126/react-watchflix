import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import YouTube from 'react-youtube';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';
import MovieRow from '../components/MovieRow';
import Banner from '../components/Banner';

const useStyles = makeStyles(theme => ({
  mainContainer: {},
  fontWhite: { color: '#fff' },
  moviesSection: {},
  moviesSectionTitle: { margin: '1em 0', fontWeight: 'bold' }
}));

export default function Movie({
  movieId,
  movie,
  recommendedMovies,
  trailerUrl,
  fetchMovieStart,
  fetchTrailerUrlStart,
  fetchRecommendedMoviesStart
}) {
  const classes = useStyles();

  useEffect(() => {
    fetchMovieStart(movieId);
    fetchTrailerUrlStart(movieId);
    fetchRecommendedMoviesStart(movieId);
  }, [
    movieId,
    fetchMovieStart,
    fetchTrailerUrlStart,
    fetchRecommendedMoviesStart
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

  return !_.isEmpty(movie) ? (
    <Grid
      container
      direction='column'
      spacing={10}
      className={classes.mainContainer}
    >
      <Grid item>
        <Banner bannerMovie={movie} bannerButtons={bannerButtons} />
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
              Recommended Movies
            </Typography>
          </Grid>
          <Grid item>
            <MovieRow movies={recommendedMovies} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ) : null;
}
