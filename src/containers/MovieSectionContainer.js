import { connect } from 'react-redux';
import { fetchMoviesStart } from '../redux/movies/moviesActions';
import {
  selectMovieType,
  selectTrailerUrl
} from '../redux/movies/moviesSelectors';
import MovieSection from '../components/MovieSection';

const mapStateToProps = (state, ownProps) => ({
  movies: selectMovieType(ownProps.movieType)(state),
  trailerUrl: selectTrailerUrl(state)
});

export default connect(mapStateToProps, {
  fetchMoviesStart
})(MovieSection);
