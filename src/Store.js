import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {reducer as itemReducer} from './sidebar';
import {reducer as todoReducer} from './todos';
const reducer = combineReducers({
    items: itemReducer,
    todos: todoReducer
});

const middlewares = [];
const  storeEnhancers = compose(
    applyMiddleware(...middlewares)
);

export default createStore(reducer, {}, storeEnhancers)



