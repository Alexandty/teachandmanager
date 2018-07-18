import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/store'
import {getVacationRequest} from './actions/vacationesRequestActions'


store.dispatch(getVacationRequest());

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
