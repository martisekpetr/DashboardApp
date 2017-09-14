import { combineReducers } from 'redux';

import dashboard from './dashboardReducer';
import entities from './entityReducer';

export default combineReducers({
  dashboard,
  entities
});