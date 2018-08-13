import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import NavbarApp from './../../Components/Navbar';

configure({ adapter: new Adapter() });

const mockStore = configureStore();

describe('Validando navbar toMatchSnapshot', () => {
    it('renderizar navbar sin Mis solicitudes', () => {
        const store = mockStore({ login: { user: { lider: false } } });
        const wrap = shallow(<NavbarApp store={store} />);
        expect(toJson(wrap)).toMatchSnapshot();
    });
    it('renderizar navbar con Mis solicitudes', () => {
        const store = mockStore({ login: { user: { lider: true } } });
        const wrap = shallow(<NavbarApp store={store} />);
        expect(toJson(wrap)).toMatchSnapshot();
    });
});