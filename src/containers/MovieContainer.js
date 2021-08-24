import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectMovie,
  selectRecommendedMovies,
  selectTrailerUrl,
  selecIsFetched
} from '../redux/movies/moviesSelectors';
import WithSpinner from './WithSpinner';
import Movie from '../pages/Movie/Movie';

const mapStateToProps = createStructuredSelector({
  movie: selectMovie,
  recommendedMovies: selectRecommendedMovies,
  trailerUrl: selectTrailerUrl,
  isFetched: selecIsFetched
});

export default compose(connect(mapStateToProps), WithSpinner)(Movie);
