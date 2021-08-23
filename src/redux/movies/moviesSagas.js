import {
  takeLatest,
  takeEvery,
  put,
  all,
  call,
  select
} from 'redux-saga/effects';
import _ from 'lodash';
import { baseUrl } from '../../utils/baseurls';
import movieTrailer from 'movie-trailer';
import {
  fetchMoviesSuccess,
  fetchMoviesFailure,
  fetchBannerMovieSuccess,
  fetchBannerMovieFailure,
  fetchUrlTrailerSuccess
} from './moviesActions';
import {
  FETCH_MOVIES_START,
  FETCH_BANNER_MOVIE_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_TRAILER_URL_START
} from './moviesActionTypes';
import { selectMovieType } from './moviesSelectors';

const request = {
  trending: `/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
  netflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_networks=213`,
  topRated: `/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
  actionMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=99`
};

function* fetchMoviesAsync({ payload: movieType }) {
  try {
    const res = yield fetch(`${baseUrl}${request[movieType]}`);
    const { results } = yield res.json();
    yield put(fetchMoviesSuccess(movieType, results));
  } catch (err) {
    yield put(fetchMoviesFailure(err.message));
  }
}

function* fetchMoviesStart() {
  yield takeEvery(FETCH_MOVIES_START, fetchMoviesAsync);
}

function* fetchbannerMovieAsync() {
  const moviesArr = yield select(selectMovieType('netflixOriginals'));

  if (!_.isEmpty(moviesArr)) {
    yield put(fetchBannerMovieSuccess(_.sample(moviesArr)));
  } else {
    yield put(fetchBannerMovieFailure('Failed to fetch movie'));
  }
}

function* fetchBannerMovieStart() {
  yield takeLatest(
    [FETCH_MOVIES_SUCCESS, FETCH_BANNER_MOVIE_START],
    fetchbannerMovieAsync
  );
}

function* fetchTrailerUrlAsync({ payload: movieTitle }) {
  try {
    const url = yield movieTrailer(movieTitle);
    yield put(fetchUrlTrailerSuccess(url.slice(url.lastIndexOf('=') + 1)));
  } catch (err) {
    console.log(err.message);
  }
}

function* fetchTrailerUrlStart() {
  yield takeEvery([FETCH_TRAILER_URL_START], fetchTrailerUrlAsync);
}

export function* moviesSagas() {
  yield all([
    call(fetchMoviesStart),
    call(fetchBannerMovieStart),
    call(fetchTrailerUrlStart)
  ]);
}
