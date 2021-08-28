import { connect } from 'react-redux';
import {
  selectMovie,
  selectRecommendedMovies,
  selectSimilarMovies,
  selectTrailerUrl
} from '../redux/movies/moviesSelectors';
import {
  fetchMovieStart,
  fetchTrailerUrlStart,
  fetchSimilarAndRecommendedMoviesStart
} from '../redux/movies/moviesActions';
import Movie from '../pages/Movie';

const mapStateToProps = (state, ownProps) => {
  return {
    movieId: ownProps.match.params.id,
    movie: selectMovie(state),
    recommendedMovies: selectRecommendedMovies(state),
    similarMovies: selectSimilarMovies(state),
    trailerUrl: selectTrailerUrl(state)
  };
};

export default connect(mapStateToProps, {
  fetchMovieStart,
  fetchTrailerUrlStart,
  fetchSimilarAndRecommendedMoviesStart
})(Movie);
