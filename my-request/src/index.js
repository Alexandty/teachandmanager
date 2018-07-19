import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import store from './store/store';
import {getVacationRequest} from './actions/vacationesRequestActions'
=======
import store from './store'
import { loadVacationRequest } from './actionCreators';
>>>>>>> 5b6b9f69f6743fc070563668edad8ecb80e0d489

store.dispatch(loadVacationRequest());

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
