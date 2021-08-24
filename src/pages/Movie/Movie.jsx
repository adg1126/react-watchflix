import React, { useEffect } from 'react';
import _ from 'lodash';
import './Movies.css';
import history from '../../history';
import { imgBaseUrl } from '../../utils/baseurls';
import { secondsToTime } from '../../utils/funcitions';

export default function Movie({
  movieId,
  movie,
  recommendedMovies,
  fetchTrailerUrlStart,
  fetchMovieStart,
  fetchRecommendedMoviesStart
}) {
  useEffect(() => {
    fetchTrailerUrlStart(movieId);
    fetchMovieStart(movieId);
    fetchRecommendedMoviesStart(movieId);
  }, [
    movieId,
    fetchTrailerUrlStart,
    fetchMovieStart,
    fetchRecommendedMoviesStart
  ]);

  const { h, m } = secondsToTime(movie?.runtime * 60);

  const handleClick = movie => {
    history.push(`/title/${movie.id}`);
  };

  return !_.isEmpty(movie) ? (
    <div className='movie-container'>
      <section className='movie-banner-section'>
        <div
          className='image-overlay'
          style={{
            backgroundImage: `url(${imgBaseUrl}/${movie.backdrop_path})`
          }}
        >
          <div className='gray-overlay'>
            <div className='movie-info'>
              <h2 className='movie-title'>{movie.title || movie.name}</h2>
              <p className='movie-details'>{`${movie.release_date} | ${h}h ${m}m`}</p>
              <p className='movie-description'>{movie.overview}</p>
            </div>
          </div>
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
        <div className='movieRow_posters'>
          {recommendedMovies?.map(m => (
            <div key={m.id}>
              <img
                className={`movieRow_poster`}
                onClick={() => handleClick(m)}
                src={`${imgBaseUrl}${m.backdrop_path}`}
                alt={m.name}
              />
              <div className='movieRow_poster_title'>{m.name || m.title}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  ) : null;
}
