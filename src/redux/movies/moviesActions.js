import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_BANNER_MOVIE_START,
  FETCH_BANNER_MOVIE_SUCCESS,
  FETCH_BANNER_MOVIE_FAILURE,
  FETCH_TRAILER_URL_START,
  FETCH_TRAILER_URL_SUCCESS,
  FETCH_MOVIE_START,
  FETCH_MOVIE_SUCCESS,
  FETCH_RECOMMENDED_MOVIES_START,
  FETCH_RECOMMENDED_MOVIES_SUCCESS,
  FETCH_RECOMMENDED_MOVIES_FAILURE
} from './moviesActionTypes';

export const fetchMoviesStart = () => ({
  type: FETCH_MOVIES_START
});

export const fetchMoviesSuccess = moviesArr => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: moviesArr
});

export const fetchMoviesFailure = errMsg => ({
  type: FETCH_MOVIES_FAILURE,
  payload: errMsg
});

export const fetchBannerMovieStart = () => ({
  type: FETCH_BANNER_MOVIE_START
});

export const fetchBannerMovieSuccess = movie => ({
  type: FETCH_BANNER_MOVIE_SUCCESS,
  payload: movie
});

export const fetchBannerMovieFailure = errMsg => ({
  type: FETCH_BANNER_MOVIE_FAILURE,
  payload: errMsg
});

export const fetchTrailerUrlStart = movieTitle => ({
  type: FETCH_TRAILER_URL_START,
  payload: movieTitle
});

export const fetchUrlTrailerSuccess = url => ({
  type: FETCH_TRAILER_URL_SUCCESS,
  payload: url
});

export const fetchMovieStart = movieId => ({
  type: FETCH_MOVIE_START,
  payload: movieId
});

export const fetchMovieSuccess = movieObj => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: movieObj
});

export const fetchRecommendedMoviesStart = movieId => ({
  type: FETCH_RECOMMENDED_MOVIES_START,
  payload: movieId
});

export const fetchRecommendedMoviesSuccess = moviesArr => ({
  type: FETCH_RECOMMENDED_MOVIES_SUCCESS,
  payload: moviesArr
});

export const fetchRecommendedMoviesFailure = errMsg => ({
  type: FETCH_RECOMMENDED_MOVIES_FAILURE,
  payload: errMsg
});
