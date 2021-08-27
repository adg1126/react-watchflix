import {
  FETCH_TV_SHOWS_START,
  FETCH_TV_SHOWS_SUCCESS,
  FETCH_TV_SHOWS_FAILURE,
  FETCH_BANNER_TV_SHOW_START,
  FETCH_BANNER_TV_SHOW_SUCCESS,
  FETCH_BANNER_TV_SHOW_FAILURE,
  FETCH_TRAILER_URL_SUCCESS,
  FETCH_TRAILER_URL_FAILURE,
  FETCH_TV_SHOW_START,
  FETCH_TV_SHOW_SUCCESS,
  FETCH_TV_SHOW_FAILURE,
  FETCH_RECOMMENDED_TV_SHOWS_START,
  FETCH_RECOMMENDED_TV_SHOWS_SUCCESS,
  FETCH_RECOMMENDED_TV_SHOWS_FAILURE
} from './TvShowsActionTypes';

const INITIAL_STATE = {
  isFetched: false,
  errMessage: '',
  bannerTvShow: null,
  trailerUrl: null,
  tvShow: null,
  recommendedTvShows: [],
  tvShowList: {}
};

const tvShowsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TV_SHOWS_START:
    case FETCH_BANNER_TV_SHOW_START:
    case FETCH_TV_SHOW_START:
    case FETCH_RECOMMENDED_TV_SHOWS_START:
      return { ...state, isFetched: false };
    case FETCH_TV_SHOWS_SUCCESS:
      return {
        ...state,
        isFetched: true,
        tvShowList: action.payload
      };
    case FETCH_BANNER_TV_SHOW_SUCCESS:
      return { ...state, isFetched: true, bannerTvShow: action.payload };
    case FETCH_TRAILER_URL_SUCCESS:
      return { ...state, trailerUrl: action.payload };
    case FETCH_TV_SHOW_SUCCESS:
      return { ...state, isFetched: true, tvShow: action.payload };
    case FETCH_RECOMMENDED_TV_SHOWS_SUCCESS:
      return { ...state, isFetched: true, recommendedTvShows: action.payload };
    case FETCH_TV_SHOWS_FAILURE:
    case FETCH_BANNER_TV_SHOW_FAILURE:
    case FETCH_TRAILER_URL_FAILURE:
    case FETCH_TV_SHOW_FAILURE:
    case FETCH_RECOMMENDED_TV_SHOWS_FAILURE:
      return { ...state, isFetched: false, errMessage: action.payload };
    default:
      return state;
  }
};

export default tvShowsReducer;
