import React from 'react';
import './MovieRow.css';
import { imgBaseUrl } from '../../utils/baseurls';

export default function MovieRow({
  fetchTrailerUrlStart,
  title,
  isLargeRow,
  movies
}) {
  const handleClick = movie => {
    fetchTrailerUrlStart(movie.title);
  };

  return (
    <div className='movieRow'>
      <h2>{title}</h2>
      <div className='movieRow_posters'>
        {movies && movies.length
          ? movies.map(m => (
              <a href='#trailer' key={m.id}>
                <img
                  className={`movieRow_poster ${
                    isLargeRow && 'movieRow_posterLarge'
                  }`}
                  onClick={() => handleClick(m)}
                  src={`${imgBaseUrl}${
                    isLargeRow ? m.poster_path : m.backdrop_path
                  }`}
                  alt={m.name}
                />
              </a>
            ))
          : null}
      </div>
    </div>
  );
}
