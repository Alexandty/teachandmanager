import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Field } from 'redux-form';
import toJson from 'enzyme-to-json';

import { LoginForm } from '../index';
import Button from '../../../Components/Button';

configure({ adapter: new Adapter() });

describe("Probando componente LoginForm", () => {
    it('Probar la accion ', () => {
        const spyLogin = jest.fn();
        const props = {
            login: spyLogin, //validar el login
            handleSubmit: (login) => {
                //fake de la respuesta
                login({ username: 'raul', password: 'alzate' });
            },
            pristine: true
        };
        const wrap = shallow(<LoginForm {...props} />);
        wrap.find(Button).simulate('click')

        expect(spyLogin).toBeCalledWith({ username: 'raul', password: 'alzate' });
    });

    it('Probar los campos ', () => {
        const props = {
            login: jest.fn(),
            handleSubmit: jest.fn(),
            pristine: true
        };
        const wrap = shallow(<LoginForm {...props} />);
        expect(wrap.find(Field).filter({ name: "username" }).exists()).toBe(true);
        expect(wrap.find(Field).filter({
            name: "password",
            type: 'password',
            label: 'Password',
        }).exists()).toBe(true);

        expect(wrap.find(Field).length).toBe(2);
        expect(wrap.find(Button).props()).toEqual({
            type: 'submit',
            disabled: true,
            "className": "my-button",
            children: "LOGIN"
        })
    });

    it('Probar el boton submit ', () => {
        const props = {
            login: jest.fn(),
            handleSubmit: jest.fn(),
            pristine: true
        };
        const wrap = shallow(<LoginForm {...props} />);
        expect(wrap.find(Button).props()).toEqual({
            type: 'submit',
            disabled: true,
            "className": "my-button",
            children: "LOGIN"
        })
    });

    it('Validando toMatchSnapshot', () => {
        const props = {
            login: jest.fn(),
            handleSubmit: jest.fn(),
            pristine: true
        };
        const wrap = shallow(<LoginForm {...props} />);
        expect(toJson(wrap)).toMatchSnapshot();
    });
})