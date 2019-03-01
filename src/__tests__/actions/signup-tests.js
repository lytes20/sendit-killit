import configureMockStore from 'redux-mock-store';
import Reduxthunk from 'redux-thunk';
import * as actions from '../../actions/signup';
import * as types from '../../actions/types';

const middlewares = [Reduxthunk];
const mockStore = configureMockStore(middlewares);

// eslint-disable-next-line no-undef
describe('Signup actions', () => {
  // eslint-disable-next-line no-undef
  it('should create an action to add firstname', () => {
    const firstname = 'Rogha';
    const expectedAction = {
      type: types.FIRSTNAME_CHANGED,
      payload: firstname
    };
    // eslint-disable-next-line no-undef
    expect(actions.onFirstNameChange(firstname)).toEqual(expectedAction);
  });

  // eslint-disable-next-line no-undef
  it('should create an action to add lastname', () => {
    const lastname = 'Timbit';
    const expectedAction = {
      type: types.LASTNAME_CHANGED,
      payload: lastname
    };
    // eslint-disable-next-line no-undef
    expect(actions.onLastNameChange(lastname)).toEqual(expectedAction);
  });

  // eslint-disable-next-line no-undef
  it('should create an action to add username', () => {
    const username = 'EZRogha';
    const expectedAction = {
      type: types.USERNAME_CHANGED,
      payload: username
    };
    // eslint-disable-next-line no-undef
    expect(actions.onUsernameChange(username)).toEqual(expectedAction);
  });

  // eslint-disable-next-line no-undef
  it('should create an action to add email', () => {
    const email = 'rtibi@gmail.com';
    const expectedAction = {
      type: types.EMAIL_CHANGED,
      payload: email
    };
    // eslint-disable-next-line no-undef
    expect(actions.onEmailChange(email)).toEqual(expectedAction);
  });

  // eslint-disable-next-line no-undef
  it('should create an action to add phone', () => {
    const phone = '07777777';
    const expectedAction = {
      type: types.PHONE_CHANGED,
      payload: phone
    };
    // eslint-disable-next-line no-undef
    expect(actions.onPhoneChange(phone)).toEqual(expectedAction);
  });

  // eslint-disable-next-line no-undef
  it('should create an action to add password', () => {
    const password = 'rt@12#$';
    const expectedAction = {
      type: types.PASSWORD_CHANGED,
      payload: password
    };
    // eslint-disable-next-line no-undef
    expect(actions.onPasswordChange(password)).toEqual(expectedAction);
  });

  // eslint-disable-next-line no-undef
  it('should create an action to add confirm password', () => {
    // eslint-disable-next-line camelcase
    const confirm_pass = 'rt@12#$';
    const expectedAction = {
      type: types.CONFIRM_PASSWORD_CHANGED,
      payload: confirm_pass
    };
    // eslint-disable-next-line no-undef
    expect(actions.onConfirmPasswordChange(confirm_pass)).toEqual(expectedAction);
  });
});

// eslint-disable-next-line no-undef
describe('Register actions', () => {
  const state = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
    error: ''
  };
  // eslint-disable-next-line no-undef
  it('should return error if firstname is invalid', () => {
    const expectedActions = [{ type: types.ERROR, payload: 'Please provide your firstname' }];
    const store = mockStore({ Signup: state });
    store.dispatch(actions.onRegisterUser(state));
    // eslint-disable-next-line no-undef
    expect(store.getActions()).toEqual(expectedActions);
  });
});
