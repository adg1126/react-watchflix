import { connect } from 'react-redux';
import {
  fetchMoviesStart,
  fetchBannerMovieStart
} from '../redux/movies/moviesActions';
import App from '../App';

export default connect(null, {
  fetchMoviesStart,
  fetchBannerMovieStart
})(App);
