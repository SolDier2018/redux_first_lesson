import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux'
import './index.css';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import allReducers from "./js/reducers";

import WebPage from './components/WebPage'

const isDevTools =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    process.env.NODE_ENV !== 'production';

const defaultState = {
    history: [
        'lol', 'ldkf'
    ]
};

const composeEnhancers = isDevTools ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers();
const store = createStore(allReducers, defaultState, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <WebPage/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
