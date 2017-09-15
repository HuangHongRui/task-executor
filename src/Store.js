import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {reducer as todoList} from './todos'
const reducer = combineReducers({

});

const middlewares = [];

const  storeEnhancers = compose(
    applyMiddleware(...middlewares)
);

export default createStore(reducer, {}, storeEnhancers)



