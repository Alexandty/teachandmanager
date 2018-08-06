import React from 'react';
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { RequestVacationList } from '../../Components/ProductList';
import ConnectedRequestVacationList from '../../Components/ProductList';
import actionCreator from '../actionCreators';
import Adapter from 'enzyme-adapter-react-16';
import action from './../Container/SolicitudVacaciones/action';


