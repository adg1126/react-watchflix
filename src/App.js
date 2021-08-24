import { useEffect, lazy, Suspense } from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import history from './history';

import Nav from './components/Nav/Nav';
import HomeContainer from './containers/HomeContainer';
import ErrorBoundary from './components/ErrorBoundary/Errorboundary';
import Spinner from './components/Spinner/Spinner';
import TopBarProgress from 'react-topbar-progress-indicator';
import CustomSwitch from './components/CustomSwitch';
const MovieContainer = lazy(() => import('./containers/MovieContainer'));

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
    fetchMoviesStart();
  }, [fetchMoviesStart]);

  TopBarProgress.config({
    barColors: {
      0: '#e50914',
      1: '#e50914'
    }
  });

  return (
    <div className='app'>
      <Router history={history}>
        <Nav />
        <CustomSwitch>
          <Route exact path='/' component={HomeContainer} />
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/title/:id' component={MovieContainer} />
            </Suspense>
          </ErrorBoundary>
        </CustomSwitch>
      </Router>
    </div>
  );
}

export default App;
