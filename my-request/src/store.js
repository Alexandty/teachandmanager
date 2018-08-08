import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import login from './Container/Login/reducer';
import RequestVacationList from './Container/VacationsRequestList/reducer';
import AddSolitudVacaciones from './Container/SolicitudVacaciones/reducer';
import thunk from 'redux-thunk';



const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;


const rootReducer = combineReducers({
    form: formReducer,
    login: login,
    VacationList: RequestVacationList,
    SolicitudVacaciones: AddSolitudVacaciones
});

export default createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);