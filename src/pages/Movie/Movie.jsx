import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import './Movies.css';
import { imgBaseUrl } from '../../utils/baseurls';
import { secondsToTime } from '../../utils/funcitions';
import YouTube from 'react-youtube';
import MovieRow from '../../components/MovieRow';

export default function Movie({
  movieId,
  movie,
  recommendedMovies,
  trailerUrl,
  fetchMovieStart,
  fetchTrailerUrlStart,
  fetchRecommendedMoviesStart
}) {
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

  const { h, m } = secondsToTime(movie?.runtime * 60);

  const handleClickPlay = () => {
    player.playVideo();
  };

  const onPlayerReady = e => {
    setPlayer(e.target);
  };

  return !_.isEmpty(movie) ? (
    <div className='movie-container'>
      <section className='movie-banner-section'>
        <div
          className='image'
          style={{
            backgroundImage: `url(${imgBaseUrl}/${movie.backdrop_path})`
          }}
        />
        <div className='gray-overlay'>
          <div className='movie-info'>
            <h2 className='movie-title'>{movie.title || movie.name}</h2>
            <p className='movie-details'>{`${movie.release_date} | ${h}h ${m}m`}</p>
            <p className='movie-description'>{movie.overview}</p>
            <a
              className='play_button'
              href='#trailer'
              onClick={handleClickPlay}
            >
              Play
            </a>
          </div>
        </div>
      </section>
      <section>
        <div id='trailer'>
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
        </div>
      </section>
      <section className='more-details-section'>
        <h1 className='header'>More Details</h1>
        <div className='more-details-container'>
          <div className='movie-detail-cell'>
            <p className='text-grey'>Genres</p>
            <p className='text-white'>
              {movie.genres.map(g => g.name).join(', ')}
            </p>
          </div>
          <div className='movie-detail-cell'>
            <p className='text-grey'>Audio</p>
            <p className='text-white'>
              {movie.spoken_languages.map(g => g.english_name).join(', ')}
            </p>
          </div>
          <div className='movie-detail-cell'>
            <p className='text-grey'>Vote Average</p>
            <p className='text-white'>{movie.vote_average}</p>
          </div>
          <div className='movie-detail-cell'>
            <p className='text-grey'>Vote Count</p>
            <p className='text-white'>{movie.vote_count}</p>
          </div>
        </div>
      </section>
      <section className='more-details-section'>
        <h1 className='header'>More Like This</h1>
        <MovieRow movies={recommendedMovies} />
      </section>
    </div>
  ) : null;
}
