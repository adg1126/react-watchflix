import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_BANNER_MOVIE_START,
  FETCH_BANNER_MOVIE_SUCCESS,
  FETCH_BANNER_MOVIE_FAILURE,
  FETCH_TRAILER_URL_SUCCESS
} from './moviesActionTypes';

const INITIAL_STATE = {
  isFetched: false,
  errMessage: '',
  bannerMovie: null,
  trailerUrl: null
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIES_START:
    case FETCH_BANNER_MOVIE_START:
      return { ...state, isFetched: false };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, isFetched: true, [action.key]: action.value };
    case FETCH_BANNER_MOVIE_SUCCESS:
      return { ...state, isFetched: true, bannerMovie: action.payload };
    case FETCH_MOVIES_FAILURE:
    case FETCH_BANNER_MOVIE_FAILURE:
      return { ...state, isFetched: false, errMessage: action.payload };
    case FETCH_TRAILER_URL_SUCCESS:
      return { ...state, trailerUrl: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
