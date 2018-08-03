import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { WelcomeMessage } from '../../Components/WelcomeMessage';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('renderizing WelcomeMessage', () => {
    it('renderize welcome cuando se ha logueado', () => {
        const wrapper = shallow(<WelcomeMessage name={'jj'} />);
        expect(wrapper.find(".saludo").length).toBe(1);
    });

    it('No renderize welcome cuando no se ha logueado', () => {
        const wrapper = shallow(<WelcomeMessage />);
        expect(wrapper.find(".noname").length).toBe(1);
    });

    it('No renderize welcome cuando no se ha logueado', () => {
        const wrapper = shallow(<WelcomeMessage />);
        expect(wrapper.find(".noname").exists()).toBe(true)
    });
})