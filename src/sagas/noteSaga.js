import { put, call, takeEvery } from 'redux-saga/effects'
import * as actionTypes from '../constants/actionTypes'
import { normalize } from 'normalizr';
import { push } from 'react-router-redux'

import { getUsers } from '../selectors/dashboardSelector'
import * as API from '../effects/api'

import { note } from '../constants/schema'

export function* loadNote(action) {
  try{
    const res = yield call(API.getNote, action.payload);
    console.log(JSON.stringify(res));
    const { entities } = normalize(res, note);

    yield put({type: actionTypes.NOTE_LOADED, payload: action.payload});
    yield put({type: actionTypes.ENTITIES_CHANGED, payload: entities});
  }
  catch (err){
    console.error(err);
  }
}


export function* createNote(action){
  try{
    yield call(API.saveNote, action.payload);
    yield put(push('/'));
  }
  catch (err){
    console.error(err);
  }
}

export function* noteSaga(){
  yield [
    takeEvery(actionTypes.LOAD_NOTE, loadNote),
    takeEvery(actionTypes.CREATE_NOTE, createNote),
    ]
}