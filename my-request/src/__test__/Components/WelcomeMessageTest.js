import React from 'react';
import { shallow } from 'enzyme';
import WelcomeMessage from '../../Components/WelcomeMessage';

const user=[
    name='juan'
]

it('renderize welcome cuando se ha logueado', () =>{
    const wrapper= shallow(<WelcomeMessage user/>)
    expect(wrapper.find("saludo").exists)
});
