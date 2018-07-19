import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const initialState = {
    user: [],
    VacationRequest: []

};
const reducer = (state = initialState, action) => {
    if (action.type === "LOGIN") {
        return {
            ...state,
            user: action.user
        }
    }
    else if (action.type === "REPLACE_VACATION_REQUEST") {
        return {
            ...state,
            VacationRequest: action.VacationRequest
        };
    }
    return state;
}
const rootReducer = combineReducers({
    reducerLogin: reducer,
    form: formReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));
