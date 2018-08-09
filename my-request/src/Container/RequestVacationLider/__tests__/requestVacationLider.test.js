import React from 'react';
import { RequestVacationLider } from '../index';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Test Para requestVacationLider', () => {
    it('Debe cargar el mensaje lo sentimos cuando no hay list de solicitudes', () => {
        const wrapper = shallow(<RequestVacationLider listVacationRequestSolvers={[]} />);
        expect(wrapper.find('.noSolicitudes').exists()).toBe(true);
    })
})