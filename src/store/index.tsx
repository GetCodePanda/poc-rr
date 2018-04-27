import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import { 
    routerReducer, 
    routerMiddleware 
} from 'react-router-redux'


import rootReducer from '../reducer';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();
const middlewareRouter = routerMiddleware(history);

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
    combineReducers(
        {
            ...rootReducer,
            router: routerReducer
        }
    ),
    applyMiddleware(
        middlewareRouter,
        thunk, 
        logger
    )
);

export default store;