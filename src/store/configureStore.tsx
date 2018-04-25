import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
import logger from 'redux-logger';

const defaultState = {
    originAmount : 1
};

function amount (state = defaultState, action: any ) {
    if(action.type === "CHANGE") {
        return {...state, originAmount : action.data };
    }
    return state;
}

const store = createStore(amount , applyMiddleware( logger));
export default store;