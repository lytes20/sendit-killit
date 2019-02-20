import React from 'react';
import {shallow} from 'enzyme';
import Home from '../../src/components/Home';
describe('home component',()=>{it('has the paragragh element',()=>{
        const wrapper = shallow(<Home debug/>);
        expect(wrapper.find('p')).toEqual('this is the test component');
    });
});