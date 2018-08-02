import React from 'react';
import { shallow, configure } from 'enzyme';
import { RequestVacationList } from '../../Components/ProductList';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('should not render vacation e ', () => {
    const wrapper = shallow(<RequestVacationList VacationData={[{ idRequest: 1 }]} user={[{ 'name': 's' }]} />)
    expect(wrapper.find(".product").length).toBe(1);
});