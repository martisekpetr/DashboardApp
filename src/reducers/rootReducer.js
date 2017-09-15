import { combineReducers } from 'redux';

import dashboard from './dashboardReducer';
import entities from './entityReducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  dashboard,
  entities,
  form: formReducer
});


