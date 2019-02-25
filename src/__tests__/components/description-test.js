import React from 'react';
import { shallow } from 'enzyme';
import Description from '../../components/Description';

describe("Description Component", () => {
  it("should render component along with subcomponents", () => {
    const wrapper = shallow(<Description />);
    const div = wrapper.find('div div');
    const h2 = wrapper.find('div h2');
    expect(div.length).toBe(1);
    expect(h2.length).toBe(1);
  })
})