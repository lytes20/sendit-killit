import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../components/login';


describe('login component',()=>{
  //renders the login component
  it('renders renders the lign component', () => {
  shallow(<Login />);
});
});
