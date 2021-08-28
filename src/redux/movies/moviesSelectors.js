import { createSelector } from 'reselect';
import _ from 'lodash';

const selectMovies = state => state.movies;

export const selectMovieList = createSelector(
  [selectMovies],
  movies => movies?.movieList
);

export const selectMovieType = movieType =>
  createSelector([selectMovieList], movieList =>
    !_.isEmpty(movieList) ? movieList[movieType] : []
  );

export const selectMovie = createSelector(
  [selectMovies],
  movies => movies?.movie
);

export const selectBannerMovie = createSelector(
  [selectMovies],
  movies => movies.bannerMovie
);

export const selectTrailerUrl = createSelector(
  [selectMovies],
  movies => movies.trailerUrl
);

export const selecIsFetched = createSelector(
  [selectMovies],
  movies => movies.isFetched
);

export const selectSimilarAndRecommendedMovies = createSelector(
  [selectMovies],
  movies => movies.similarAndRecommended
);

export const selectSimilarMovies = createSelector(
  [selectSimilarAndRecommendedMovies],
  similarAndRecommended =>
    !_.isEmpty(similarAndRecommended) ? similarAndRecommended.similarMovies : {}
);

export const selectRecommendedMovies = createSelector(
  [selectSimilarAndRecommendedMovies],
  similarAndRecommended =>
    !_.isEmpty(similarAndRecommended)
      ? similarAndRecommended.recommendedMovies
      : {}
);
