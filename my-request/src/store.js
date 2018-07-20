import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const initialState = {
    user: [],
    VacationData: []

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
            VacationData: action.VacationData
        };
    }
    return state;
}

const rootReducer = combineReducers({
    reducer: reducer,
    form: formReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));
