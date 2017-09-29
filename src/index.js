import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux'
import './assets/scss/index.css';
import App from './containers/app';
import {store} from './store'


render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

