import { all } from 'redux-saga/effects';
import appSagas from './appSaga';

export default function* rootSaga() {
  yield all([
    ...appSagas,
  ]);
}
