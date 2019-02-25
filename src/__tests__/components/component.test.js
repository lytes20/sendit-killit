import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../components/Home';

// eslint-disable-next-line no-undef
describe('Home component', () => {
  // eslint-disable-next-line no-undef
  it('should render the h1', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const component = shallow(<Home />);
    // eslint-disable-next-line no-undef
    expect(component.contains(<h2> the is the home component</h2>)).toBe(true);
  });
});
