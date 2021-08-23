import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_BANNER_MOVIE_START,
  FETCH_BANNER_MOVIE_SUCCESS,
  FETCH_BANNER_MOVIE_FAILURE,
  FETCH_TRAILER_URL_START,
  FETCH_TRAILER_URL_SUCCESS
} from './moviesActionTypes';

export const fetchMoviesStart = movieType => ({
  type: FETCH_MOVIES_START,
  payload: movieType
});

export const fetchMoviesSuccess = (movieType, moviesArr) => ({
  type: FETCH_MOVIES_SUCCESS,
  key: movieType,
  value: moviesArr
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
