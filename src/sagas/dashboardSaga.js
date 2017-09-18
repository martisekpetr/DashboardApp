import { put, call, takeEvery } from 'redux-saga/effects'
import * as actionTypes from '../constants/actionTypes'
import { normalize } from 'normalizr';

import * as API from '../effects/api'

import { dashboard } from '../constants/schema'


export function* loadDashboard(){
  try{
    const res = yield call(API.getDashboard);

    const normalizedData = yield call(normalize, res, dashboard);

    console.log(`Result: ${JSON.stringify(normalizedData)}`);

    yield put({type: actionTypes.DASHBOARD_LOADED, payload: normalizedData.result});
    yield put({type: actionTypes.ENTITIES_CHANGED, payload: normalizedData.entities})
  }
  catch (err){
    console.error(err);
  }
}

export default function* dashboardSaga(){
  yield takeEvery(actionTypes.LOAD_DASHBOARD, loadDashboard)
}