import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { SolicitudForm } from '../index';

configure({ adapter: new Adapter() });

describe('Probando vista SolicitudForm', () => {
    it('Validando toMatchSnapshot', () => {
        const props = {
            loadAvailableDays: jest.fn(),
            guardar: jest.fn(),
            consultar: jest.fn(),
            handleSubmit: jest.fn(),
            avalableDaysData: 0,
            availableDaysVacation: true,
            user: { user: 'a' }
        };
        const wrap = shallow(<SolicitudForm {...props} />);
        expect(toJson(wrap)).toMatchSnapshot();
    });
});