import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import Confirmar from '../../Components/Confirmar';

configure({ adapter: new Adapter() });

describe('Test para confirmar', () => {
    it('Debe cargar el componente', () => {
        const wrapper = shallow(<Confirmar />);
    })
    it('Debe cargar los botones del componente', () => {
        const wrapper = shallow(<Confirmar />);
        expect(wrapper.find({ bsStyle: 'success' }).exists()).toBeTruthy();
        expect(wrapper.find({ bsStyle: 'danger' }).exists()).toBeTruthy();
    })
    it('Debe simular el aceptar', () => {
        const acepta = jest.fn();
        const wrapper = shallow(<Confirmar mostrar={true} onAceptar={acepta} />);
        wrapper.find({ bsStyle: 'success' }).simulate('click');
        expect(acepta.mock.calls.length).toBe(1);
    })
    it('Debe simular el cancelar', () => {
        const cancel = jest.fn();
        const wrapper = shallow(<Confirmar mostrar={true} onCancelar={cancel} />);
        wrapper.find({ bsStyle: 'danger', bsClass: "btn" }).simulate('click');
        expect(cancel.mock.calls.length).toBe(1);
    })
})

