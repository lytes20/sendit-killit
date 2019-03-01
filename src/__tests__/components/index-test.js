import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components';

describe('Index Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  it('should render without any error', () => {
    const div = wrapper.find('div')
    expect(div.exists()).toBeTruthy()
  })
})
