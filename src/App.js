import { useEffect, lazy, Suspense } from 'react';
import { Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import './App.css';
import history from './history';

import Appbar from './components/Appbar';
import HomeContainer from './containers/HomeContainer';
import ErrorBoundary from './components/ErrorBoundary/Errorboundary';
import Spinner from './components/Spinner';
import TopBarProgress from 'react-topbar-progress-indicator';
import CustomSwitch from './components/CustomSwitch';
const MovieContainer = lazy(() => import('./containers/MovieContainer'));

export const movieCategories = [
  { title: 'Trending Now', movieType: 'trending', isLargeRow: true },
  { title: 'Top Rated', movieType: 'topRated' },
  { title: 'Action Movies', movieType: 'actionMovies' },
  { title: 'Funny Movies', movieType: 'comedyMovies' },
  { title: 'Horror Movies', movieType: 'horrorMovies' },
  { title: 'Romantic Movies', movieType: 'romanceMovies' },
  { title: 'Documentaries', movieType: 'documentaries' }
];

function App({ fetchMoviesStart, fetchBannerMovieStart }) {
  useEffect(() => {
    fetchMoviesStart();
    fetchBannerMovieStart();
  }, [fetchMoviesStart, fetchBannerMovieStart]);

  TopBarProgress.config({
    barColors: {
      0: '#e50914',
      1: '#e50914'
    }
  });

  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Appbar />
          <CustomSwitch>
            <Route exact path='/' component={HomeContainer} />
            <ErrorBoundary>
              <Suspense fallback={<Spinner />}>
                <Route exact path='/title/:id' component={MovieContainer} />
              </Suspense>
            </ErrorBoundary>
          </CustomSwitch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
