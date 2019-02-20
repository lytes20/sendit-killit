import React from 'react';
import {shallow} from 'enzyme';
import Home from '../../src/components/Home';
describe('<Home/>', ()=>{
    it('test the home component', ()=>{
        const wrapper = shallow(<Home/>);
        expect(wrapper.contains(<p> this is the test component</p>)).toBeTruthy();
    });
});