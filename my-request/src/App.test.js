// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});
