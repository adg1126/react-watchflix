import { connect } from 'react-redux';
import {
  selectTvShow,
  selectRecommendedTvShows,
  selectSimilarTvShows,
  selectTrailerUrl
} from '../redux/tv_shows/TvShowsSelectors';
import {
  fetchTvShowStart,
  fetchTrailerUrlStart,
  fetchSimilarAndRecommendedTvShowsStart
} from '../redux/tv_shows/TvShowsActions';
import TvShow from '../pages/TvShow';

const mapStateToProps = (state, ownProps) => {
  return {
    tvShowId: ownProps.match.params.id,
    bannerTvShow: selectTvShow(state),
    recommendedTvShows: selectRecommendedTvShows(state),
    similarTvShows: selectSimilarTvShows(state),
    trailerUrl: selectTrailerUrl(state)
  };
};

export default connect(mapStateToProps, {
  fetchTvShowStart,
  fetchTrailerUrlStart,
  fetchSimilarAndRecommendedTvShowsStart
})(TvShow);
