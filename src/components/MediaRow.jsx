import React from 'react';
import history from '../history';
import { imgBaseUrl } from '../utils/baseurls';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  fontWhite: { color: '#ffff' },
  postersContainer: {
    width: '95vw',
    display: 'flex',
    overflowX: 'scroll'
  },
  moviePoster: {
    cursor: 'pointer',
    objectFit: 'contain',
    maxHeight: '130px',
    transition: 'transform 450ms',
    margin: '0.6rem',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  moviePosterLarge: {
    maxHeight: '250px',
    margin: '0.6rem',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  title: {
    width: '85%',
    margin: '0 auto',
    textAlign: 'center'
  }
}));

export default function MediaRow({ mediaArr, mediaType, isLargeRow }) {
  const classes = useStyles();

  const handleClickRedirect = movie => {
    mediaType === 'tv'
      ? history.push(`/tv_shows/${movie.id}`)
      : history.push(`/movies/${movie.id}`);
  };

  return (
    <div className={classes.postersContainer}>
      {mediaArr && mediaArr.length
        ? mediaArr.map(m => (
            <div key={m.id}>
              <img
                className={[
                  classes.moviePoster,
                  isLargeRow && classes.moviePosterLarge
                ].join(' ')}
                onClick={() => handleClickRedirect(m)}
                src={`${imgBaseUrl}${
                  isLargeRow ? m.poster_path : m.backdrop_path
                }`}
                alt={m.name}
              />
              <div className={[classes.fontWhite, classes.title].join(' ')}>
                {m.name || m.title}
              </div>
            </div>
          ))
        : null}
    </div>
  );
}
