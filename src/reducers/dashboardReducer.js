import * as ActionTypes from '../constants/actionTypes';

const initState = {
  dashboardId: undefined,
  noteId: undefined,
};

const dashboardReducer = (state = initState, { type, payload = {} }) => {
  if (type === ActionTypes.DASHBOARD_LOADED) {
    return {
      ...state,
      name: payload.entities.dashboards["1"].name,
      dashboardId: payload.entities.dashboards["1"].id,
    }
  }

  if(type === ActionTypes.NOTE_LOADED){
    return{
      ...state,
      noteId: payload,
    }
  }

  return state;
};

export default dashboardReducer;