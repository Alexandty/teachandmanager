import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const initialState = {
    user: '',
    VacationData: [],
    vacationSolicitudData: [],
    logged: false,
    avalableDaysData: 0,
    availableDaysVacation: true
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
    else if (action.type === "ADD_SOLICITUD_VACACIONES") {
        return {
            ...state,
            vacationSolicitudData: action.vacationSolicitudData,
            availableDaysVacation: false
        };
    }
    else if (action.type === "GET_AVAILABLE_DAYS") {
        return {
            ...state,
            avalableDaysData: action.avalableDaysData
        };
    }
    return state;
}
const rootReducer = combineReducers({
    reducer: reducer,
    form: formReducer
})

export default createStore(rootReducer, applyMiddleware(thunk));
