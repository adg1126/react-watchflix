import {
  FETCH_TV_SHOWS_START,
  FETCH_TV_SHOWS_SUCCESS,
  FETCH_TV_SHOWS_FAILURE,
  FETCH_BANNER_TV_SHOW_START,
  FETCH_BANNER_TV_SHOW_SUCCESS,
  FETCH_BANNER_TV_SHOW_FAILURE,
  FETCH_TRAILER_URL_START,
  FETCH_TRAILER_URL_SUCCESS,
  FETCH_TRAILER_URL_FAILURE,
  FETCH_TV_SHOW_START,
  FETCH_TV_SHOW_SUCCESS,
  FETCH_TV_SHOW_FAILURE,
  FETCH_RECOMMENDED_TV_SHOWS_START,
  FETCH_RECOMMENDED_TV_SHOWS_SUCCESS,
  FETCH_RECOMMENDED_TV_SHOWS_FAILURE
} from './TvShowsActionTypes';

export const fetchTvShowsStart = () => ({
  type: FETCH_TV_SHOWS_START
});

export const fetchTvShowsSuccess = tvShowArr => ({
  type: FETCH_TV_SHOWS_SUCCESS,
  payload: tvShowArr
});

export const fetchTvShowsFailure = errMsg => ({
  type: FETCH_TV_SHOWS_FAILURE,
  payload: errMsg
});

export const fetchBannerTvShowStart = () => ({
  type: FETCH_BANNER_TV_SHOW_START
});

export const fetchBannerTvShowSuccess = tvShow => ({
  type: FETCH_BANNER_TV_SHOW_SUCCESS,
  payload: tvShow
});

export const fetchBannerTvShowFailure = errMsg => ({
  type: FETCH_BANNER_TV_SHOW_FAILURE,
  payload: errMsg
});

export const fetchTrailerUrlStart = tvShowId => ({
  type: FETCH_TRAILER_URL_START,
  payload: tvShowId
});

export const fetchTrailerUrlSuccess = url => ({
  type: FETCH_TRAILER_URL_SUCCESS,
  payload: url
});

export const fetchTrailerUrlFailure = errMsg => ({
  type: FETCH_TRAILER_URL_FAILURE,
  payload: errMsg
});

export const fetchTvShowStart = tvShowId => ({
  type: FETCH_TV_SHOW_START,
  payload: tvShowId
});

export const fetchTvShowSuccess = tvShowObj => ({
  type: FETCH_TV_SHOW_SUCCESS,
  payload: tvShowObj
});

export const fetchTvShowFailure = errMsg => ({
  type: FETCH_TV_SHOW_FAILURE,
  payload: errMsg
});

export const fetchRecommendedTvShowsStart = tvShowId => ({
  type: FETCH_RECOMMENDED_TV_SHOWS_START,
  payload: tvShowId
});

export const fetchRecommendedTvShowsSuccess = tvShowArr => ({
  type: FETCH_RECOMMENDED_TV_SHOWS_SUCCESS,
  payload: tvShowArr
});

export const fetchRecommendedTvShowsFailure = errMsg => ({
  type: FETCH_RECOMMENDED_TV_SHOWS_FAILURE,
  payload: errMsg
});
