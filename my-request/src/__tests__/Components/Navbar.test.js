import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import NavbarApp from './../../Components/Navbar';
configure({ adapter: new Adapter() });

describe('Test navbar', () => {
    it('renderizar navbar ', () => {
        const wrap = shallow(<NavbarApp />);
        expect(toJson(wrap)).toMatchSnapshot();
    });
});