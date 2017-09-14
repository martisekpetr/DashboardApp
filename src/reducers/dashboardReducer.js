import * as ActionTypes from '../constants/actionTypes';

const initState = {dashboardId: 0};

const dashboardReducer = (state = initState, { type, payload = {} }) => {
  if (type === ActionTypes.DASHBOARD_LOADED) {
    return {
      ...state,
      name: payload.entities.dashboards["1"].name,
      id: payload.entities.dashboards["1"].id,
    }
  }

  return state;
};

export default dashboardReducer;