// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, render } from 'enzyme';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

configure({ adapter: new Adapter() });
it('renders without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
