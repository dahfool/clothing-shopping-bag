import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux'

import reducers from './reducers'

export const history = createHistory();

const middleware = applyMiddleware(
  routerMiddleware(history),
  promise,
  thunk,
);

export const store: any = createStore(
  reducers,
  middleware
);
