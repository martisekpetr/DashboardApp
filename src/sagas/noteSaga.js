import { select, put, call, takeEvery } from 'redux-saga/effects'
import * as actionTypes from '../constants/actionTypes'
// import { normalize, schema } from 'normalizr';

import * as API from '../effects/api'

export function* loadNote(action) {
  try{
    const res = yield call(API.getNote(action.payload));
    console.log(JSON.stringify(res));
    yield put({type: actionTypes.NOTE_LOADED, payload: res});
  }
  catch (err){
    console.error(err);
  }
}

export function* noteSaga(){
  yield takeEvery(actionTypes.LOAD_NOTE, loadNote)
}