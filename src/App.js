import { useEffect, lazy, Suspense } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';
import './App.css';
import history from './history';

import AppbarContainer from './containers/AppbarContainer';
import HomeContainer from './containers/HomeContainer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Spinner from './components/Spinner/Spinner';
import TopBarProgress from 'react-topbar-progress-indicator';
import CustomSwitch from './components/CustomSwitch';
const MovieContainer = lazy(() => import('./containers/MovieContainer')),
  About = lazy(() => import('./pages/About')),
  SigninContainer = lazy(() => import('./containers/SigninContainer')),
  SignupContainer = lazy(() => import('./containers/SignupContainer')),
  MoviesContainer = lazy(() => import('./containers/MoviesContainer')),
  TvShowsContainer = lazy(() => import('./containers/TvShowsContainer')),
  TvShowContainer = lazy(() => import('./containers/TvShowContainer'));

export const movieCategories = [
  { title: 'Trending Movies', movieType: 'trending', isLargeRow: true },
  { title: 'Top Rated Movies', movieType: 'topRated' },
  { title: 'Action Movies', movieType: 'actionMovies' },
  { title: 'Funny Movies', movieType: 'comedyMovies' },
  { title: 'Horror Movies', movieType: 'horrorMovies' },
  { title: 'Romantic Movies', movieType: 'romanceMovies' },
  { title: 'Documentaries', movieType: 'documentaries' }
];

export const tvShowCategories = [
  { title: 'Trending TV Shows', tvShowType: 'trending', isLargeRow: true },
  { title: 'Top TV Shows', tvShowType: 'topRated' },
  { title: 'Latest TV Shows', tvShowType: 'latest' },
  { title: 'Documentaries', tvShowType: 'documentaries' }
];

function App({
  currentUser,
  fetchMoviesStart,
  fetchBannerMovieStart,
  checkUserSession,
  fetchTvShowsStart,
  fetchBannerTvShowStart
}) {
  useEffect(() => {
    fetchMoviesStart();
    fetchBannerMovieStart();
    checkUserSession();
    fetchTvShowsStart();
    fetchBannerTvShowStart();
  }, [
    checkUserSession,
    fetchMoviesStart,
    fetchBannerMovieStart,
    fetchTvShowsStart,
    fetchBannerTvShowStart
  ]);

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
          <AppbarContainer />
          <CustomSwitch>
            <Route exact path='/' component={HomeContainer} />
            <ErrorBoundary>
              <Suspense fallback={<Spinner />}>
                <Route exact path='/movies/:id' component={MovieContainer} />
                <Route exact path='/about' component={About} />
                <Route exact path='/movies' component={MoviesContainer} />
                <Route exact path='/tv_shows' component={TvShowsContainer} />
                <Route exact path='/tv_shows/:id' component={TvShowContainer} />
                <Route
                  exact
                  path='/signin'
                  render={() =>
                    currentUser ? <Redirect to='/' /> : <SigninContainer />
                  }
                />
                <Route
                  exact
                  path='/signup'
                  render={() =>
                    currentUser ? <Redirect to='/' /> : <SignupContainer />
                  }
                />
              </Suspense>
            </ErrorBoundary>
          </CustomSwitch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
