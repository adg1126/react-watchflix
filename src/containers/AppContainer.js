import { connect } from 'react-redux';
import {
  fetchMoviesStart,
  fetchMovieStart,
  fetchTrailerUrlStart,
  fetchRecommendedMoviesStart
} from '../redux/movies/moviesActions';
import App from '../App';

export default connect(null, {
  fetchMoviesStart,
  fetchMovieStart,
  fetchTrailerUrlStart,
  fetchRecommendedMoviesStart
})(App);
