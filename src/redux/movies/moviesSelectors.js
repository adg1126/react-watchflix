import { createSelector } from 'reselect';

const selectMovies = state => state.movies;

export const selectMovieList = createSelector(
  [selectMovies],
  movies => movies?.movieList
);

export const selectMovieType = movieType =>
  createSelector([selectMovieList], movieList => movieList[movieType]);

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

export const selectRecommendedMovies = createSelector(
  [selectMovies],
  movies => movies.recommendedMovies
);
