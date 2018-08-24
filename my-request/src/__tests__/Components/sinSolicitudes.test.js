import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import SinSolicitudes from '../../Components/NoSolicitudes';

configure({ adapter: new Adapter() });

describe('Test para sinSolicitudes', () => {
    it('Debe cargar el componente', () => {
        const wrapper = shallow(<SinSolicitudes />);
        expect(wrapper.find('.sinSolicitudes').exists()).toEqual(true);
    })
    it('Debe cargar el title que se envia por propiedades', () => {
        const wrapper = shallow(<SinSolicitudes title={'Lo Sentimos!'} />);
        expect(wrapper.find('h2', { children: 'Lo sentimos!' }).exists()).toBe(true);
    })
    it('Debe cargar el children de la etiqueta', () => {
        const wrapper = shallow(
            <SinSolicitudes >usted no tiene solicitudes</SinSolicitudes>
        );
        expect(wrapper.find({ children: 'usted no tiene solicitudes' }).exists()).toBe(true);
    })
})