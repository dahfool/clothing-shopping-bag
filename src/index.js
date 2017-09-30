import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux'
import { Route }  from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import './assets/css/styles.css';
import App from './containers/app';
import Checkout from './containers/checkout';
import { store, history } from './store'


render (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className='container'>
                <Route exact={true} path="/" component={App}/>
                <Route path="/checkout" component={Checkout}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

