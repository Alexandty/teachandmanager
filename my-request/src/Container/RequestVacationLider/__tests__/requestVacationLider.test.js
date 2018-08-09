import React from 'react';
import { RequestVacationLider } from '../index';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';


configure({ adapter: new Adapter() });

describe('Test Para requestVacationLider', () => {
    const list = [
        { idRequest: 1, startDate: '2018-10-10', endDate: '2018-10-11', requestedDays: 1, state: 'aprobado' },
        { idRequest: 2, startDate: '2018-10-10', endDate: '2018-10-11', requestedDays: 1, state: 'pendiente' }
    ];
    it('Debe cargar el mensaje lo sentimos cuando no hay list de solicitudes', () => {
        const wrapper = shallow(<RequestVacationLider listVacationRequestSolvers={[]} />);
        expect(wrapper.find('.noSolicitudes').exists()).toBe(true);
    })
    it('Debe cargar Solicitudes cuando hay datos en la lista', () => {
        const wrapper = shallow(<RequestVacationLider listVacationRequestSolvers={list} />);
        expect(wrapper.find('.Solicitudes').exists()).toBe(true);

    })
    it('Debe cargar label con estilo succes cuando hay datos en la lista con estado aprobado', () => {
        const wrapper = shallow(<RequestVacationLider listVacationRequestSolvers={list} />);
        expect(wrapper.find({ bsStyle: 'success', children: 'aprobado' }).exists()).toBe(true);
    })
    it('Debe cargar label con estilo default cuando hay datos en la lista con estado pendiente', () => {
        const wrapper = shallow(<RequestVacationLider listVacationRequestSolvers={list} />);
        //console.log(wrapper.debug());
        expect(wrapper.find({ bsStyle: 'default', children: 'pendiente' }).exists()).toBe(true);
    })
    it('Debe cargar glyphicon-ok cuando hay datos en la lista', () => {
        const wrapper = shallow(<RequestVacationLider listVacationRequestSolvers={list} />);
        expect(wrapper.find('.glyphicon-ok').exists()).toBe(true);
    })
})