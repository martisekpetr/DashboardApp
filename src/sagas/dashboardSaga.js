import { select, put, call, takeEvery } from 'redux-saga/effects'
import * as actionTypes from '../constants/actionTypes'
import { normalize, schema } from 'normalizr';

import * as API from '../effects/api'

// Define a users schema
const user = new schema.Entity('users');

// Define your article
const note = new schema.Entity('notes', {
  author: user,
});

const dashboard = new schema.Entity('dashboards',{
  notes : [ note ],
});



export function* loadDashboard(){
  try{
    const res = yield call(API.getDashboard);

    const normalizedData = normalize(res, dashboard);

    console.log(`Result: ${JSON.stringify(normalizedData)}`);

    yield put({type: actionTypes.DASHBOARD_LOADED, payload: normalizedData});

    yield put({type: actionTypes.ENTITIES_CHANGED, payload: normalizedData.entities})
  }
  catch (err){
    console.error(err);
  }
  // yield put({type: actionTypes.DASHBOARD_LOADED, payload: 3});
}

export function* dashboardSaga(){
  yield takeEvery(actionTypes.LOAD_DASHBOARD, loadDashboard)
}