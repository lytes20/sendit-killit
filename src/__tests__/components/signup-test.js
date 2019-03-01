import React from 'react';
import { shallow } from 'enzyme';
import { Signup } from '../../components/Signup';

// eslint-disable-next-line no-undef
describe('Signup Component', () => {
  let wrapper;
  // eslint-disable-next-line no-undef
  const mockSignupfn = jest.fn();
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    wrapper = shallow(
      // eslint-disable-next-line react/jsx-filename-extension
      <Signup
        signupData={mockSignupfn}
        onFirstNameChange={mockSignupfn}
        onLastNameChange={mockSignupfn}
        onUsernameChange={mockSignupfn}
        onEmailChange={mockSignupfn}
        onPhoneChange={mockSignupfn}
        onPasswordChange={mockSignupfn}
        onConfirmPasswordChange={mockSignupfn}
      />
    );
  });

  // eslint-disable-next-line no-undef
  it('should render without throwing an error', () => {
    // eslint-disable-next-line no-undef
    expect(wrapper.find('form').exists()).toBe(true);
  });

  // eslint-disable-next-line no-undef
  it('on change of input values corresponding prop functions are called', () => {
    wrapper
      .find('#Firstname')
      .simulate('change', { target: { name: 'Firstname', value: 'Rogha' } });
    wrapper.find('#Lastname').simulate('change', { target: { name: 'Lastname', value: 'Timbi' } });
    wrapper
      .find('#Username')
      .simulate('change', { target: { name: 'Username', value: 'EZRogha' } });
    wrapper.find('#Email').simulate('change', {
      target: { name: 'Email', value: 'test@gmail.com' }
    });
    wrapper.find('#Phone').simulate('change', {
      target: { name: 'Phone', value: '07777777' }
    });
    wrapper.find('#Password').simulate('change', {
      target: { name: 'Password', value: 'Ruao@1245$' }
    });
    wrapper.find('#Confirm_password').simulate('change', {
      target: { name: 'Confirm_password', value: 'Ruao@1245$' }
    });

    // eslint-disable-next-line no-undef
    expect(mockSignupfn.mock.calls).toEqual([
      ['Rogha'],
      ['Timbi'],
      ['EZRogha'],
      ['test@gmail.com'],
      ['07777777'],
      ['Ruao@1245$'],
      ['Ruao@1245$']
    ]);
  });
});
