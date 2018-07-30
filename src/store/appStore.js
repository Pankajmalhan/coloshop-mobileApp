import {createStore, applyMiddleware,compose    } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';
import appReducers from '../reducers/appReducers';
import INITIAL_STATE from '../state/initialState';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../initSaga';
/*********** Create Logger   *******************/
const loggerMiddleware = createLogger();
const sagaMiddleWare=createSagaMiddleware();
var middleWares=[thunk,promiseMiddleware,sagaMiddleWare,loggerMiddleware];
const composables = [applyMiddleware(...middleWares),
    window.devToolsExtension ?window.devToolsExtension() : f=>f
    ];
const enhancer = compose(... composables);
const store = createStore(
    appReducers,
    INITIAL_STATE,
    enhancer
);
sagaMiddleWare.run(rootSaga);
export default store;