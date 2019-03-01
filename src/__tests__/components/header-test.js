import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

// eslint-disable-next-line no-undef
describe('Header Component', () => {
  // eslint-disable-next-line no-undef
  it('should render component along with subcomponents', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<Header />);
    const nav = wrapper.find('nav');
    const img = nav.find('div img');
    const ul = nav.find('ul');
    // eslint-disable-next-line no-undef
    expect(nav.exists()).toBeTruthy();
    // eslint-disable-next-line no-undef
    expect(img.length).toBe(1);
    // eslint-disable-next-line no-undef
    expect(ul.length).toBe(1);
  });
});
