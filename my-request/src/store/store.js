import { createStore, applyMiddleware } from "redux";
import vacationRequestReducer from '../reducers/vacationRequestReducer';
import thunk from 'redux-thunk';

export default () => {
    return createStore(vacationRequestReducer, applyMiddleware(thunk));
};