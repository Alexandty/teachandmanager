import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Motivo } from "../index";

configure({ adapter: new Adapter() });

describe('Test para PerdirMotivo', () => {
    const handle = jest.fn();
    it('Debe cargar el componente', () => {
        const wrapper = shallow(<Motivo handleSubmit={handle} pristine={true} mostrar={true} titulo={'Test 1'} />);
    })
    it('Debe cargar el boton', () => {
        const wrapper = shallow(<Motivo handleSubmit={handle} pristine={true} mostrar={true} titulo={'Test 2'} />)
            .find({ bsStyle: 'success' });
        expect(wrapper.exists()).toBeTruthy();
    })
    it('Debe cargar el textarea', () => {
        const wrapper = shallow(<Motivo handleSubmit={handle} pristine={true} mostrar={true} titulo={'Test 2'} />)
            .find({ type: 'textarea' });
        expect(wrapper.exists()).toBeTruthy();
    })
    it('Validando toMatchSnapshot', () => {
        const props = {
            enviarMotivo: jest.fn(),
            handleSubmit: jest.fn(),
            pristine: true
        };
        const wrap = shallow(<Motivo {...props} />);
        expect(toJson(wrap)).toMatchSnapshot();
    });
})