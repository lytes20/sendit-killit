import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../components/login';

// eslint-disable-next-line no-undef
describe('Login component', () => {
  // eslint-disable-next-line no-undef
  it('the components loads without fail', () => {
    shallow(<Login />);
  });
  // eslint-disable-next-line no-undef
  it('test whether the div renders', () => {
    const component = shallow(<Login />);
    const wrapper = component.find('div');
    // eslint-disable-next-line no-undef
    expect(wrapper.length).toBe(0);
  });
});
