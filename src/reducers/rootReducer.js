import { combineReducers } from 'redux';

import dashboard from './dashboardReducer';
import entities from './entityReducer';
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  dashboard,
  entities,
  form: formReducer,
  router: routerReducer,
});


