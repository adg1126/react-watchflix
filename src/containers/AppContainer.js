import { connect } from 'react-redux';
import {
  fetchMoviesStart,
  fetchBannerMovieStart
} from '../redux/movies/moviesActions';
import {
  fetchTvShowsStart,
  fetchBannerTvShowStart
} from '../redux/tv_shows/TvShowsActions';
import { checkUserSession } from '../redux/user/usersActions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/userSelectors';
import App from '../App';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, {
  fetchMoviesStart,
  fetchBannerMovieStart,
  checkUserSession,
  fetchTvShowsStart,
  fetchBannerTvShowStart
})(App);
