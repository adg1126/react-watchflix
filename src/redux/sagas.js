import { all, call } from '@redux-saga/core/effects';
import { moviesSagas } from './movies/moviesSagas';
import { TvShowsSagas } from './tv_shows/TvShowsSagas';
import { userSagas } from './user/userSagas';

export default function* rootSaga() {
  yield all([call(moviesSagas), call(userSagas), call(TvShowsSagas)]);
}
