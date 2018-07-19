import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    VacationRequest: [],

};

const reducer = (state = initialState, action) => {
    if (action.type === "REPLACE_VACATION_REQUEST") {
        return {
            ...state,
            VacationRequest: action.VacationRequest
        };
    }
    return state;
};

export default createStore(reducer, applyMiddleware(thunk));
