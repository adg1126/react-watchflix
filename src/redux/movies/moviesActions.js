import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_BANNER_MOVIE_START,
  FETCH_BANNER_MOVIE_SUCCESS,
  FETCH_BANNER_MOVIE_FAILURE,
  FETCH_TRAILER_URL_START,
  FETCH_TRAILER_URL_SUCCESS,
  FETCH_TRAILER_URL_FAILURE,
  FETCH_MOVIE_START,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
  FETCH_SIMILAR_AND_RECOMMENDED_MOVIES_START,
  FETCH_SIMILAR_AND_RECOMMENDED_MOVIES_SUCCESS,
  FETCH_SIMILAR_AND_RECOMMENDED_MOVIES_FAILURE
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

export const fetchTrailerUrlStart = movieId => ({
  type: FETCH_TRAILER_URL_START,
  payload: movieId
});

export const fetchUrlTrailerSuccess = url => ({
  type: FETCH_TRAILER_URL_SUCCESS,
  payload: url
});

export const fetchTrailerUrlFailure = errMsg => ({
  type: FETCH_TRAILER_URL_FAILURE,
  payload: errMsg
});

export const fetchMovieStart = movieId => ({
  type: FETCH_MOVIE_START,
  payload: movieId
});

export const fetchMovieSuccess = movieObj => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: movieObj
});

export const fetchMovieFailure = errMsg => ({
  type: FETCH_MOVIE_FAILURE,
  payload: errMsg
});

export const fetchSimilarAndRecommendedMoviesStart = movieId => ({
  type: FETCH_SIMILAR_AND_RECOMMENDED_MOVIES_START,
  payload: movieId
});

export const fetchSimilarAndRecommendedMoviesSuccess = moviesObj => ({
  type: FETCH_SIMILAR_AND_RECOMMENDED_MOVIES_SUCCESS,
  payload: moviesObj
});

export const fetchSimilarRecommendedMoviesFailure = errMsg => ({
  type: FETCH_SIMILAR_AND_RECOMMENDED_MOVIES_FAILURE,
  payload: errMsg
});
