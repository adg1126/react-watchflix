import { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import history from './history';

import Nav from './components/Nav/Nav';
import HomeContainer from './containers/HomeContainer';
import MovieContainer from './containers/MovieContainer';

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

function App({
  fetchMoviesStart,
  fetchTrailerUrlStart,
  fetchMovieStart,
  fetchRecommendedMoviesStart
}) {
  const { pathname } = history.location;
  const movieId = pathname.slice(pathname.lastIndexOf('/') + 1);

  useEffect(() => {
    fetchMoviesStart();

    if (movieId.length) {
      fetchTrailerUrlStart(movieId);
      fetchMovieStart(movieId);
      fetchRecommendedMoviesStart(movieId);
    }
  }, [
    fetchMoviesStart,
    movieId,
    fetchTrailerUrlStart,
    fetchMovieStart,
    fetchRecommendedMoviesStart
  ]);

  return (
    <div className='app'>
      <Router history={history}>
        <Nav />
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/title/:id' component={MovieContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
