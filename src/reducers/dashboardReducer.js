import * as ActionTypes from '../constants/actionTypes';

const initState = {
  dashboardId: undefined,
  noteId: undefined,
};

const dashboardReducer = (state = initState, {type, payload = {}}) => {
  switch (type) {
    case ActionTypes.DASHBOARD_LOADED:
      return {
        ...state,
        dashboardId: payload,
      };
    case ActionTypes.NOTE_LOADED:
      return {
        ...state,
        noteId: payload,
      };
    default:
      return state;
  }
}


export default dashboardReducer;