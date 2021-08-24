import { connect } from 'react-redux';
import {
  fetchMovieStart,
  fetchTrailerUrlStart,
  fetchRecommendedMoviesStart
} from '../redux/movies/moviesActions';
import {
  selectMovie,
  selectRecommendedMovies
} from '../redux/movies/moviesSelectors';
import Movie from '../pages/Movie/Movie';

const mapStateToProps = (state, ownProps) => {
  const movieId = ownProps.match.params.id;

  return {
    movieId,
    movie: selectMovie(state),
    recommendedMovies: selectRecommendedMovies(state)
  };
};

export default connect(mapStateToProps, {
  fetchMovieStart,
  fetchTrailerUrlStart,
  fetchRecommendedMoviesStart
})(Movie);
