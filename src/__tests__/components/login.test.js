import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../components/login'
describe('login Component',()=>{
    it('login component renders without fail', () => {
        // eslint-disable-next-line react/jsx-filename-extension
        const component = shallow(<Login />);
    });
});