import React from 'react'
import { shallow } from 'enzyme'
import CreateOrder from '../../components/CreateOrder';
import ConfirmDialog from '../../components/Dialogs/ConfirmDialog';


describe('components', () => {
    it('renders all parts', () => {
        const component = shallow(<CreateOrder />);
        console.log(component); 
        expect(component).toHaveLength(1);
        // expect(component.find(ConfirmDialog).exists()).toBe(true);
        // expect(wrapper.find('span').text()).toBe('welcome John Doe');
      });
} );

