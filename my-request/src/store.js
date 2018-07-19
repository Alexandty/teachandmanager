import { createStore, applyMiddleware, combineReducers } from 'redux';
import vacationRequestReducer from '../src/reducers/vacationRequestReducer';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const initialState = {
    user: []
};
const reducer = (state = {}, action) => {
    if (action.type === "LOGIN") {
        return {
            ...state,
            user: action.user
        }
    }
    return state;
}
const rootReducer = combineReducers({
    reducerLogin: reducer,
    form: formReducer
})

export default createStore(rootReducer, initialState, applyMiddleware(thunk));