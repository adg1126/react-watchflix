import { all, call } from '@redux-saga/core/effects';
import { moviesSagas } from './movies/moviesSagas';

export default function* rootSaga() {
  yield all([call(moviesSagas)]);
}
