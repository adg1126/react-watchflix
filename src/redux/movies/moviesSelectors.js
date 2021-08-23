import { createSelector } from 'reselect';

const selectMovies = state => state.movies;

export const selectMovieType = movieType =>
  createSelector([selectMovies], movies => movies[movieType]);

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
