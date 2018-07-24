import { createStore, applyMiddleware, combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const initialState = {
    user: '',
    VacationData: [],
    logged: false
};

const reducer = (state = initialState, action) => {
    if (action.type === "LOGIN") {
        return {
            ...state,
            user: action.user,
            logged: true
        }
    }
    else if (action.type === "REPLACE_PRODUCTS") {
        return {
            ...state,
            VacationData: action.VacationData
        };
    }
    return state;
}
const rootReducer = combineReducers({
    reducerLogin: reducer,
    form: formReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));
