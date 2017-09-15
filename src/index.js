import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import registerServiceWorker from './registerServiceWorker';

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

import List from './components/List'
import Note from './components/Note'
import CreateNote from './components/CreateNote'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
// Build the middleware for intercepting and dispatching navigation actions

const routermiddleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, routermiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={List}/>
        <Route path="/note/:id" component={Note}/>
        <Route path="/create/" component={CreateNote}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();