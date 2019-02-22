import 'jest-enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../components/Home';

// eslint-disable-next-line no-undef
it('renders without crashing', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  shallow(<Home />);
});
