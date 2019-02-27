import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../components/login';

// set up function for the test
const setUp = (props = {}) => {
  const component = shallow(<Login {...props} />);
  return component;
};
// eslint-disable-next-line no-undef
describe('login Component', () => {
  let component;
  beforeEach(){
    component = setUp();
  }
  // eslint-disable-next-line no-undef
  it('login component renders without fail', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    setUp();
  });
  // eslint-disable-next-line no-undef
  it('test the form element', () => {
    const wrapper = component.find('.form-control');
  });
});
