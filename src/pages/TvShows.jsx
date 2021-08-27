import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import YouTube from 'react-youtube';
import { tvShowCategories } from '../App';
import { Grid } from '@material-ui/core';
import { PlayArrow, VideoLibrary } from '@material-ui/icons';
import Banner from '../components/Banner';
import TvShowSectionContainer from '../containers/TvShowSectionContainer';
import Footer from '../components/Footer';

export default function TvShows({
  bannerTvShow,
  trailerUrl,
  fetchTrailerUrlStart
}) {
  useEffect(() => {
    if (!_.isEmpty(bannerTvShow)) {
      fetchTrailerUrlStart(bannerTvShow.id);
    }
  }, [bannerTvShow, fetchTrailerUrlStart]);

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
          <Banner
            mediaType='tv'
            banner={bannerTvShow}
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
        {tvShowCategories.map((m, i) => (
          <Grid item key={i}>
            <TvShowSectionContainer {...m} />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </>
  );
}
