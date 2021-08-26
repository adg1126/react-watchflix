import { connect } from 'react-redux';
import {
  selectMovie,
  selectRecommendedMovies,
  selectTrailerUrl,
  selecIsFetched
} from '../redux/movies/moviesSelectors';
import {
  fetchMovieStart,
  fetchTrailerUrlStart,
  fetchRecommendedMoviesStart
} from '../redux/movies/moviesActions';
import Movie from '../pages/Movie';

const mapStateToProps = (state, ownProps) => {
  return {
    movieId: ownProps.match.params.id,
    movie: selectMovie(state),
    recommendedMovies: selectRecommendedMovies(state),
    trailerUrl: selectTrailerUrl(state),
    isFetched: selecIsFetched(state)
  };
};

export default connect(mapStateToProps, {
  fetchMovieStart,
  fetchTrailerUrlStart,
  fetchRecommendedMoviesStart
})(Movie);
