import { connect } from 'react-redux';
import {
  selectTvShow,
  selectRecommendedTvShows,
  selectTrailerUrl
} from '../redux/tv_shows/TvShowsSelectors';
import {
  fetchTvShowStart,
  fetchTrailerUrlStart,
  fetchRecommendedTvShowsStart
} from '../redux/tv_shows/TvShowsActions';
import TvShow from '../pages/TvShow';

const mapStateToProps = (state, ownProps) => {
  return {
    tvShowId: ownProps.match.params.id,
    bannerTvShow: selectTvShow(state),
    recommendedTvShows: selectRecommendedTvShows(state),
    trailerUrl: selectTrailerUrl(state)
  };
};

export default connect(mapStateToProps, {
  fetchTvShowStart,
  fetchTrailerUrlStart,
  fetchRecommendedTvShowsStart
})(TvShow);
