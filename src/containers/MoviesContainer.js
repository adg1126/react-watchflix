import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selecIsFetched,
  selectBannerMovie,
  selectTrailerUrl
} from '../redux/movies/moviesSelectors';
import { fetchTrailerUrlStart } from '../redux/movies/moviesActions';
import WithSpinner from './WithSpinner';
import Movies from '../pages/Movies';

const mapStateToProps = createStructuredSelector({
  isFetched: selecIsFetched,
  trailerUrl: selectTrailerUrl,
  bannerMovie: selectBannerMovie
});

export default compose(
  connect(mapStateToProps, { fetchTrailerUrlStart }),
  WithSpinner
)(Movies);
