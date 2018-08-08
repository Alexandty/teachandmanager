import React from 'react';
import { configure, shallow } from 'enzyme';
import { RequestVacationList } from '../index';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('test produclist', () => {
    it('renders  productos when store is empty', () => {
        const wrapper = shallow(<RequestVacationList loadRequestVacation={jest.fn()} VacationData={[{ idRequest: 1 }]} user={[{ 'name': 's' }]} />);
        expect(wrapper.find(".Product").length).toBe(1);
    });

    it('No debe mostrar productos cuando store este vacio', () => {
        const wrapper = shallow(<RequestVacationList loadRequestVacation={jest.fn()} VacationData={[]} user={{ name: 'juan' }} />);
        expect(wrapper.find(".ListRequestVacationEmpty").length).toBe(1);
    })

    it('Validando toMatchSnapshot RequestVacationList', () => {
        const props = {
            loadRequestVacation: jest.fn(),
            VacationData: [],
            user: { user: 'a' }
        };
        const wrap = shallow(<RequestVacationList {...props} />);
        expect(toJson(wrap)).toMatchSnapshot();
    });

})