import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_BANNER_MOVIE_START,
  FETCH_BANNER_MOVIE_SUCCESS,
  FETCH_BANNER_MOVIE_FAILURE,
  FETCH_TRAILER_URL_SUCCESS,
  FETCH_TRAILER_URL_FAILURE,
  FETCH_MOVIE_START,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
  FETCH_RECOMMENDED_MOVIES_START,
  FETCH_RECOMMENDED_MOVIES_SUCCESS,
  FETCH_RECOMMENDED_MOVIES_FAILURE
} from './moviesActionTypes';

const INITIAL_STATE = {
  isFetched: false,
  errMessage: '',
  bannerMovie: null,
  trailerUrl: null,
  movie: null,
  recommendedMovies: [],
  movieList: {}
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIES_START:
    case FETCH_BANNER_MOVIE_START:
    case FETCH_MOVIE_START:
    case FETCH_RECOMMENDED_MOVIES_START:
      return { ...state, isFetched: false };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isFetched: true,
        movieList: action.payload
      };
    case FETCH_BANNER_MOVIE_SUCCESS:
      return { ...state, isFetched: true, bannerMovie: action.payload };
    case FETCH_TRAILER_URL_SUCCESS:
      return { ...state, trailerUrl: action.payload };
    case FETCH_MOVIE_SUCCESS:
      return { ...state, isFetched: true, movie: action.payload };
    case FETCH_RECOMMENDED_MOVIES_SUCCESS:
      return { ...state, isFetched: true, recommendedMovies: action.payload };
    case FETCH_MOVIES_FAILURE:
    case FETCH_BANNER_MOVIE_FAILURE:
    case FETCH_TRAILER_URL_FAILURE:
    case FETCH_MOVIE_FAILURE:
    case FETCH_RECOMMENDED_MOVIES_FAILURE:
      return { ...state, isFetched: false, errMessage: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
