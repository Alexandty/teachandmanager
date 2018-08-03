import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { WelcomeMessage } from '../../Components/WelcomeMessage';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// const mockStore = configureStore();
describe('renderizing WelcomeMessage', () => {
    it('renderize welcome cuando se ha logueado', () => {
        const wrapper = shallow(<WelcomeMessage name={'jj'} />);
        console.log(wrapper.debug());
        expect(wrapper.find(".saludo").length).toBe(1);
    });

})