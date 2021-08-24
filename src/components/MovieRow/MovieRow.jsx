import React from 'react';
import './MovieRow.css';
import { imgBaseUrl } from '../../utils/baseurls';
import history from '../../history';

export default function MovieRow({ title, isLargeRow, movies }) {
  const handleClick = movie => {
    history.push(`/title/${movie.id}`);
  };

  return (
    <div className='movieRow'>
      <h2>{title}</h2>
      <div className='movieRow_posters'>
        {movies && movies.length
          ? movies.map(m => (
              <div key={m.id}>
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
                <div className='movieRow_poster_title'>{m.name || m.title}</div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
