
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../components/Home';

// eslint-disable-next-line no-undef
it('renders renders the home component', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  const wrapper = shallow(<Home />);
  const text = <h2> the is the home component</h2>;
  // eslint-disable-next-line no-undef
  expect(wrapper.contains(text)).toBe(true);
});