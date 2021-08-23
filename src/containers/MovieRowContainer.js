import { connect } from 'react-redux';
import {
  fetchMoviesStart,
  fetchTrailerUrlStart
} from '../redux/movies/moviesActions';
import {
  selectMovieType,
  selectTrailerUrl
} from '../redux/movies/moviesSelectors';
import MovieRow from '../components/MovieRow/MovieRow';

const mapStateToProps = (state, ownProps) => ({
  movies: selectMovieType(ownProps.movieType)(state),
  trailerUrl: selectTrailerUrl(state)
});

export default connect(mapStateToProps, {
  fetchMoviesStart,
  fetchTrailerUrlStart
})(MovieRow);
