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
  fetchUrlTrailerSuccess,
  fetchTrailerUrlFailure,
  fetchMovieSuccess,
  fetchMovieFailure,
  fetchRecommendedMoviesSuccess,
  fetchRecommendedMoviesFailure
} from './moviesActions';
import {
  FETCH_MOVIES_START,
  FETCH_BANNER_MOVIE_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_TRAILER_URL_START,
  FETCH_MOVIE_START,
  FETCH_RECOMMENDED_MOVIES_START
} from './moviesActionTypes';
import { selectMovieType } from './moviesSelectors';

const urls = {
  trending: `/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
  topRated: `/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
  actionMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=99`
};

function* fetchMoviesAsync() {
  try {
    const moviesArr = yield Promise.all(
      Object.entries(urls).map(async ([k, v]) => {
        const res = await fetch(`${baseUrl}${v}`);
        const { results } = await res.json();

        const movieArr = await Promise.all(
          results.map(async ({ id }) => {
            const res = await fetch(
              `${baseUrl}/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
            );
            const movie = await res.json();

            return movie;
          })
        );

        return { [k]: movieArr };
      })
    );

    yield put(fetchMoviesSuccess(Object.assign(...moviesArr)));
  } catch (err) {
    yield put(fetchMoviesFailure(err.message));
  }
}

function* fetchMoviesStart() {
  yield takeEvery(FETCH_MOVIES_START, fetchMoviesAsync);
}

function* fetchBannerMovieAsync() {
  const moviesArr = yield select(selectMovieType('trending'));
  if (!_.isEmpty(moviesArr)) {
    yield put(fetchBannerMovieSuccess(_.sample(moviesArr)));
  } else {
    yield put(fetchBannerMovieFailure('Failed to fetch movie'));
  }
}

function* fetchBannerMovieStart() {
  yield takeLatest(
    [FETCH_MOVIES_SUCCESS, FETCH_BANNER_MOVIE_START],
    fetchBannerMovieAsync
  );
}

function* fetchTrailerUrlAsync({ payload }) {
  try {
    const url = yield movieTrailer(null, { tmdbId: payload });
    yield put(fetchUrlTrailerSuccess(url.slice(url.lastIndexOf('=') + 1)));
  } catch (err) {
    yield put(fetchTrailerUrlFailure(err.message));
  }
}

function* fetchTrailerUrlStart() {
  yield takeEvery(FETCH_TRAILER_URL_START, fetchTrailerUrlAsync);
}
function* fetchMovieAsync({ payload }) {
  try {
    const res = yield fetch(
      `${baseUrl}/movie/${payload}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    const movie = yield res.json();
    yield put(fetchMovieSuccess(movie));
  } catch (err) {
    yield put(fetchMovieFailure(err.message));
  }
}

function* fetchMovieStart() {
  yield takeEvery(FETCH_MOVIE_START, fetchMovieAsync);
}

function* fetchRecommendedMoviesAsync({ payload }) {
  try {
    const res = yield fetch(
      `${baseUrl}/movie/${payload}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    const { results } = yield res.json();

    yield put(fetchRecommendedMoviesSuccess(results));
  } catch (err) {
    yield put(fetchRecommendedMoviesFailure(err.message));
  }
}

function* fetchRecommendedMoviesStart() {
  yield takeEvery(FETCH_RECOMMENDED_MOVIES_START, fetchRecommendedMoviesAsync);
}

export function* moviesSagas() {
  yield all([
    call(fetchMoviesStart),
    call(fetchBannerMovieStart),
    call(fetchTrailerUrlStart),
    call(fetchMovieStart),
    call(fetchRecommendedMoviesStart)
  ]);
}
