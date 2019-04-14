import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk';

// import {logger} from 'redux-logger'

import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import {searchImages, requestImages} from "./reducers";

const logger = createLogger();

const rootReducers = combineReducers({searchImages,requestImages})

// const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

const store = createStore(rootReducers, applyMiddleware (thunkMiddleware,logger))
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();
