import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import login from './Container/Login/reducer';
import RequestVacationList from './Container/VacationsRequestList/reducer';
import thunk from 'redux-thunk';


const initialState = {
    vacationSolicitudData: [],
    avalableDaysData: 0,
    availableDaysVacation: true
};
const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;

const reducer = (state = initialState, action) => {

     if (action.type === "ADD_SOLICITUD_VACACIONES") {
        return {
            ...state,
            vacationSolicitudData: action.vacationSolicitudData,
        };
    }
    else if (action.type === "CHECK_SOLICITUD_VACACIONES") {
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
    form: formReducer,
    login: login,
    VacationList: RequestVacationList
})

export default createStore(rootReducer, 
    composeEnhancers(applyMiddleware(thunk))
);
