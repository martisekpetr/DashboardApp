import { fork, all } from 'redux-saga/effects';

import dashboardSaga from './dashboardSaga'
import noteSaga from './noteSaga'

export default function*() {
  yield all(
    [
      fork(dashboardSaga),
      fork(noteSaga)
    ]
  );
}
