import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectBannerTvShow,
  selectTrailerUrl
} from '../redux/tv_shows/TvShowsSelectors';
import { fetchTrailerUrlStart } from '../redux/tv_shows/TvShowsActions';
import TvShows from '../pages/TvShows';

const mapStateToProps = createStructuredSelector({
  trailerUrl: selectTrailerUrl,
  bannerTvShow: selectBannerTvShow
});

export default connect(mapStateToProps, { fetchTrailerUrlStart })(TvShows);
