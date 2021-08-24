import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selecIsFetched,
  selectTrailerUrl
} from '../redux/movies/moviesSelectors';
import WithSpinner from './WithSpinner';
import Home from '../pages/Home/Home';

const mapStateToProps = createStructuredSelector({
  isFetched: selecIsFetched,
  trailerUrl: selectTrailerUrl
});

export default compose(connect(mapStateToProps), WithSpinner)(Home);
