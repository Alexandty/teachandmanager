import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { SolicitudForm } from '../index';
import ConnectedSolicitudForm from '../index';
import { Button } from 'react-bootstrap';
import configureStore from 'redux-mock-store';

const mockStore = configureStore()

configure({ adapter: new Adapter() });

describe('Probando vista SolicitudForm', () => {
    it('Validando toMatchSnapshot', () => {
        const props = {
            loadAvailableDays: jest.fn(),
            guardar: jest.fn(),
            consultar: jest.fn(),
            handleSubmit: jest.fn(),
            avalableDaysData: 0,
            availableDaysVacation: true,
            user: { user: 'a' }
        };
        const wrap = shallow(<SolicitudForm {...props} />);
        expect(toJson(wrap)).toMatchSnapshot();
    });

    it('Probar la accion consulta de vacaciones', () => {
        const spyGuardar = jest.fn();
        const props = {
            avalableDaysData: 0,
            availableDaysVacation: true,
            consultar: jest.fn(),
            loadAvailableDays: jest.fn(),
            guardar: spyGuardar, //validar el login
            handleSubmit: (guardar) => {
                //fake de la respuesta
                guardar({ username: 'raul', password: 'alzate' });
            },
            pristine: true,
            user: { user: 'a' }
        };
        const wrap = shallow(<SolicitudForm {...props} />);
        wrap.find(Button).simulate('click')

        expect(spyGuardar).toBeCalledWith({ username: 'raul', password: 'alzate', user: 'a' });
    });

    it('renders the connected component ConnectedSolicitudForm', () => {
        const initialState = {}
        const store = mockStore(initialState)
        const wrapper = shallow(<ConnectedSolicitudForm store={store} />);
    });
});