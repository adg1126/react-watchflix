import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home/Home';

export const movieCategories = [
  { title: 'Trending Now', movieType: 'trending', isLargeRow: true },
  { title: 'NETFLIX ORIGINALS', movieType: 'netflixOriginals' },
  { title: 'Top Rated', movieType: 'topRated' },
  { title: 'Action Movies', movieType: 'actionMovies' },
  { title: 'Funny Movies', movieType: 'comedyMovies' },
  { title: 'Horror Movies', movieType: 'horrorMovies' },
  { title: 'Romantic Movies', movieType: 'romanceMovies' },
  { title: 'Documentaries', movieType: 'documentaries' }
];

function App({ fetchMoviesStart }) {
  useEffect(() => {
    movieCategories.forEach(({ movieType }) => fetchMoviesStart(movieType));
  }, [fetchMoviesStart]);

  return (
    <div className='app'>
      <Home />
    </div>
  );
}

export default App;
