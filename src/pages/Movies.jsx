import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import YouTube from 'react-youtube';
import { movieCategories } from '../App';
import { Grid } from '@material-ui/core';
import { PlayArrow, VideoLibrary } from '@material-ui/icons';
import Banner from '../components/Banner';
import MovieSectionContainer from '../containers/MovieSectionContainer';
import Footer from '../components/Footer';

export default function Movie({
  bannerMovie,
  trailerUrl,
  fetchTrailerUrlStart
}) {
  useEffect(() => {
    if (!_.isEmpty(bannerMovie)) {
      fetchTrailerUrlStart(bannerMovie.id);
    }
  }, [bannerMovie, fetchTrailerUrlStart]);

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
    },
    { text: 'VIEW LIBRARY', icon: <VideoLibrary />, href: '#library' }
  ];

  return (
    <>
      <Grid container direction='column'>
        <Grid item>
          <Banner banner={bannerMovie} bannerButtons={bannerButtons} />
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
        {movieCategories.map((m, i) => (
          <Grid item key={i}>
            <MovieSectionContainer {...m} />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </>
  );
}
