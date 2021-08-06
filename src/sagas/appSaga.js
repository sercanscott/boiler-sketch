import { takeEvery, select } from 'redux-saga/effects';
import { EXAMPLE_ACTION } from '../constants/actionTypes';
import { getVinsJob } from '../selectors/appSelector';

// EXAMPLE: Basic saga function
function* exampleSaga(action) {
  // not a good practice
  const state = yield select();
  // always try to use selectors
  const vin = yield select(getVinsJob);

  console.log(action, state, vin);
  /**
   * TODO:
   * Try using different yield effects like
   * - take
   * - call
   * - put
   */
}

const appSagas = [
  takeEvery([EXAMPLE_ACTION], exampleSaga),
];

export default appSagas;
