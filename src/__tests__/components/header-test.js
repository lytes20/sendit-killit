import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe("Header Component", () => {
  it("should render component along with subcomponents", () => {
    const wrapper = shallow(<Header />);
    const nav = wrapper.find('nav')
    const img = nav.find('div img');
    const ul = nav.find('ul');
    
    expect(nav.exists()).toBeTruthy()
    expect(img.length).toBe(1);
    expect(ul.length).toBe(1);
  })
})