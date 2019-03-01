import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components';

// eslint-disable-next-line no-undef
describe('Index Component', () => {
  let wrapper;
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    // eslint-disable-next-line react/jsx-filename-extension
    wrapper = shallow(<App />);
  });
  // eslint-disable-next-line no-undef
  it('should render without any error', () => {
    const div = wrapper.find('div');
    // eslint-disable-next-line no-undef
    expect(div.exists()).toBeTruthy();
  });
});
