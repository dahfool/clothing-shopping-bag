import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux'

import reducers from './reducers'

export const history = createHistory();

const middleware = applyMiddleware(
  routerMiddleware(history),
  promise(),
  thunk,
  logger()
);

export const store = createStore(
  reducers,
  middleware
);
