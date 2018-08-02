import React from 'react';
import { shallow } from 'enzyme';
import WelcomeMessage from '../../Components/WelcomeMessage';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { Provider } from 'react-redux'
import store from '../../store';
const user = [
    name = 'juan'
]

it('renderize welcome cuando se ha logueado', () => {
    shallow(
        <Provider store={store}>
            <WelcomeMessage />
        </Provider>);
});
