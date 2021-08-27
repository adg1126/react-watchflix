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
import { selectTvShowType } from './TvShowsSelectors';
import {
  fetchTvShowsSuccess,
  fetchTvShowsFailure,
  fetchBannerTvShowSuccess,
  fetchBannerTvShowFailure,
  fetchTrailerUrlSuccess,
  fetchTrailerUrlFailure,
  fetchTvShowSuccess,
  fetchTvShowFailure,
  fetchRecommendedTvShowsSuccess,
  fetchRecommendedTvShowsFailure
} from './TvShowsActions';
import {
  FETCH_TV_SHOWS_START,
  FETCH_TV_SHOWS_SUCCESS,
  FETCH_BANNER_TV_SHOW_START,
  FETCH_TRAILER_URL_START,
  FETCH_TV_SHOW_START,
  FETCH_RECOMMENDED_TV_SHOWS_START
} from './TvShowsActionTypes';

const urls = {
  trending: `/trending/tv/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
  topRated: `/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
  documentaries: `/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=99`,
  latest: `/tv/latest?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
};

function* fetchTvShowsAsync() {
  try {
    const showsArr = yield Promise.all(
      Object.entries(urls).map(async ([k, v]) => {
        const res = await fetch(`${baseUrl}${v}`);
        const { results } = await res.json();

        const showsArr = await Promise.all(
          results.map(async ({ id }) => {
            const res = await fetch(
              `${baseUrl}/tv/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
            );
            const movie = await res.json();

            return movie;
          })
        );

        return { [k]: showsArr };
      })
    );

    yield put(fetchTvShowsSuccess(Object.assign(...showsArr)));
  } catch (err) {
    yield put(fetchTvShowsFailure(err.message));
  }
}

function* fetchTvShowsStart() {
  yield takeEvery(FETCH_TV_SHOWS_START, fetchTvShowsAsync);
}

function* fetchBannerTvShowAsync() {
  const tvShowsArr = yield select(selectTvShowType('trending'));
  if (!_.isEmpty(tvShowsArr)) {
    yield put(fetchBannerTvShowSuccess(_.sample(tvShowsArr)));
  } else {
    yield put(fetchBannerTvShowFailure('Failed to fetch movie'));
  }
}

function* fetchBannerTvShowStart() {
  yield takeLatest(
    [FETCH_TV_SHOWS_SUCCESS, FETCH_BANNER_TV_SHOW_START],
    fetchBannerTvShowAsync
  );
}

function* fetchTrailerUrlAsync({ payload }) {
  try {
    const url = yield movieTrailer(null, { tmdbId: payload });
    yield put(fetchTrailerUrlSuccess(url.slice(url.lastIndexOf('=') + 1)));
  } catch (err) {
    yield put(fetchTrailerUrlFailure(err.message));
  }
}

function* fetchTrailerUrlStart() {
  yield takeEvery(FETCH_TRAILER_URL_START, fetchTrailerUrlAsync);
}

function* fetchTvShowAsync({ payload }) {
  try {
    const res = yield fetch(
      `${baseUrl}/tv/${payload}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    const tvShow = yield res.json();
    yield put(fetchTvShowSuccess(tvShow));
  } catch (err) {
    yield put(fetchTvShowFailure(err.message));
  }
}

function* fetchTvShowStart() {
  yield takeEvery(FETCH_TV_SHOW_START, fetchTvShowAsync);
}

function* fetchRecommendedTvShowsAsync({ payload }) {
  try {
    const res = yield fetch(
      `${baseUrl}/tv/${payload}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    const { results } = yield res.json();

    yield put(fetchRecommendedTvShowsSuccess(results));
  } catch (err) {
    yield put(fetchRecommendedTvShowsFailure(err.message));
  }
}

function* fetchRecommendedTvShowsStart() {
  yield takeEvery(
    FETCH_RECOMMENDED_TV_SHOWS_START,
    fetchRecommendedTvShowsAsync
  );
}

export function* TvShowsSagas() {
  yield all([
    call(fetchTvShowsStart),
    call(fetchBannerTvShowStart),
    call(fetchTrailerUrlStart),
    call(fetchTvShowStart),
    call(fetchRecommendedTvShowsStart)
  ]);
}
