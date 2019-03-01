import React from 'react';
import { shallow } from 'enzyme';
import Description from '../../components/Description';

// eslint-disable-next-line no-undef
describe('Description Component', () => {
  // eslint-disable-next-line no-undef
  it('should render component along with subcomponents', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<Description />);
    const div = wrapper.find('div div');
    const h2 = wrapper.find('div h2');
    // eslint-disable-next-line no-undef
    expect(div.length).toBe(1);
    // eslint-disable-next-line no-undef
    expect(h2.length).toBe(1);
  });
});
