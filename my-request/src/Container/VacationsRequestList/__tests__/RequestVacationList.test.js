import React from 'react';
import { configure, shallow, render } from 'enzyme';
import { RequestVacationList } from '../index';
import ConnectedRequestVacationList from '../index';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

const mockStore = configureStore()

configure({ adapter: new Adapter() });

describe('test Vacationlist', () => {
    it('renders  Vacation when store is empty', () => {
        const wrapper = shallow(<RequestVacationList loadRequestVacation={jest.fn()} VacationData={[{ idRequest: 1 }]} user={[{ 'name': 's' }]} />);
        expect(wrapper.find(".Vacation").length).toBe(1);
    });

    it('No debe mostrar Vacation cuando store este vacio', () => {
        const wrapper = shallow(<RequestVacationList loadRequestVacation={jest.fn()} VacationData={[]} user={{ name: 'juan' }} />);
        expect(wrapper.find(".ListRequestVacationEmpty").length).toBe(1);
    })

    it('Validando toMatchSnapshot RequestVacationList', () => {
        const props = {
            loadRequestVacation: jest.fn(),
            VacationData: [],
            user: { user: 'a', entryDate: '2018-08-09' }
        };
        const wrap = shallow(<RequestVacationList {...props} />);
        expect(toJson(wrap)).toMatchSnapshot();
    });

    it('renders and sort vacations', () => {
        const wrapper = shallow(<RequestVacationList loadRequestVacation={jest.fn()} VacationData={[{ idRequest: 1 }, { idRequest: 2 }]} user={[{ 'name': 's' }]} />);
        expect(wrapper.find(".Vacation").exists()).toBe(true);
    });

    it('renders the connected component', () => {
        const initialState = {}
        const store = mockStore(initialState)
        const wrapper = shallow(<ConnectedRequestVacationList store={store} loadRequestVacation={jest.fn()} VacationData={[{ idRequest: 1 }]} user={[{ name: 's' }]} />);
    });
})