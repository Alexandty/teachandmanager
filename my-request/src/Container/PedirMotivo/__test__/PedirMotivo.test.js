import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import { Motivo } from "../index";

configure({ adapter: new Adapter() });

describe('Test para PerdirMotivo', () => {
    const handle = jest.fn();
    it('Debe cargar el componente', () => {
        const wrapper = shallow(<Motivo handleSubmit={handle} pristine={true} mostrar={true} titulo={'Test 1'} />);
        console.log(wrapper.debug());
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
})