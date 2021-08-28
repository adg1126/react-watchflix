import { createSelector } from 'reselect';
import _ from 'lodash';

const selectTvShows = state => state.tv_shows;

export const selectTvShowList = createSelector(
  [selectTvShows],
  tv_shows => tv_shows?.tvShowList
);

export const selectTvShowType = tvShowType =>
  createSelector([selectTvShowList], tvShowList =>
    !_.isEmpty(tvShowList) ? tvShowList[tvShowType] : []
  );

export const selectBannerTvShow = createSelector(
  [selectTvShows],
  tv_shows => tv_shows.bannerTvShow
);

export const selecIsFetched = createSelector(
  [selectTvShows],
  tv_shows => tv_shows.isFetched
);

export const selectTrailerUrl = createSelector(
  [selectTvShows],
  tv_shows => tv_shows.trailerUrl
);

export const selectTvShow = createSelector(
  [selectTvShows],
  tv_shows => tv_shows?.tvShow
);

export const selectSimilarAndRecommendedTvShows = createSelector(
  [selectTvShows],
  tv_shows => tv_shows.similarAndRecommended
);

export const selectSimilarTvShows = createSelector(
  [selectSimilarAndRecommendedTvShows],
  similarAndRecommended =>
    !_.isEmpty(similarAndRecommended)
      ? similarAndRecommended.similarTvShows
      : {}
);

export const selectRecommendedTvShows = createSelector(
  [selectSimilarAndRecommendedTvShows],
  similarAndRecommended =>
    !_.isEmpty(similarAndRecommended)
      ? similarAndRecommended.recommendedTvShows
      : {}
);
