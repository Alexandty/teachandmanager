import React from 'react';
import { configure, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { RequestVacationList } from '../../Components/ProductList';
import ConnectedRequestVacationList from '../../Components/ProductList';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockStore = configureStore();

it('renders  productos when store is empty', () => {
    const wrapper = shallow(<RequestVacationList VacationData={[{ idRequest: 1 }]} user={[{ 'name': 's' }]} />);
    expect(wrapper.find(".Product").length).toBe(1);
});

it('No debe mostrar productos cuando store este vacio', () => {
    const store = mockStore({ VacationData: [] });
    const wrapper = shallow(<ConnectedRequestVacationList store={store} user={[{ 'name': 's' }]} />);
    expect(wrapper.find("ListRequestVacationEmpty").length).toBe(0);
})