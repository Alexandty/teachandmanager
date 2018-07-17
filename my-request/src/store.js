import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state={}, action)=>{

    return state;
}

export default createStore(reducer, applyMiddleware(thunk));