import { all } from 'redux-saga/effects';

import HomeSaga from '../containers/Home/ducks/Home.saga';

export function* mainSaga() {
  yield all([HomeSaga()]);
}
