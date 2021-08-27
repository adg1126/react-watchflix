import { connect } from 'react-redux';
import { fetchTvShowStart } from '../redux/tv_shows/TvShowsActions';
import {
  selectTvShowType,
  selectTrailerUrl
} from '../redux/tv_shows/TvShowsSelectors';
import TvShowSection from '../components/TvShowSection';

const mapStateToProps = (state, ownProps) => ({
  tvShows: selectTvShowType(ownProps.tvShowType)(state),
  trailerUrl: selectTrailerUrl(state)
});

export default connect(mapStateToProps, {
  fetchTvShowStart
})(TvShowSection);
