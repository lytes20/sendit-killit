/* eslint-disable no-undef */
import signup from '../../reducers/signup';
import * as types from '../../actions/types';

// eslint-disable-next-line no-undef
describe('Signup Reducer', () => {
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
  it('should return default state', () => {
    // eslint-disable-next-line no-undef
    expect(signup(state, { type: 'undefined' })).toEqual(state);
  });

  // eslint-disable-next-line no-undef
  it('should return state with updated firstname', () => {
    const newState = { ...state };
    newState.firstname = 'Rogha';
    const reducer = signup(state, { type: types.FIRSTNAME_CHANGED, payload: 'Rogha' })
    // eslint-disable-next-line no-undef
    expect(reducer).toEqual(newState);
  });

  // eslint-disable-next-line no-undef
  it('should return state with updated lastname', () => {
    const newState = { ...state };
    newState.lastname = 'Timbiti';
    const reducer = signup(state, { type: types.LASTNAME_CHANGED, payload: 'Timbiti' });
    // eslint-disable-next-line no-undef
    expect(reducer).toEqual(newState)
  });

  // eslint-disable-next-line no-undef
  it('should return state with updated username', () => {
    const newState = { ...state };
    newState.username = 'EZRogha';
    const reducer = signup(state, { type: types.USERNAME_CHANGED, payload: 'EZRogha' });
    // eslint-disable-next-line no-undef
    expect(reducer).toEqual(newState);
  });

  // eslint-disable-next-line no-undef
  it('should return state with updated email', () => {
    const newState = { ...state };
    newState.email = 'rtimbiti@gmail.com';
    const reducer = signup(state, { type: types.EMAIL_CHANGED, payload: 'rtimbiti@gmail.com' });
    // eslint-disable-next-line no-undef
    expect(reducer).toEqual(newState);
  });

  it('should return state with updated phone number', () => {
    const newState = { ...state };
    newState.phone = '0777777777';
    const reducer = signup(state, { type: types.PHONE_CHANGED, payload: '0777777777' });
    // eslint-disable-next-line no-undef
    expect(reducer).toEqual(newState);
  });

  it('should return state with updated password', () => {
    const newState = { ...state };
    newState.password = 'gha@#12$';
    const reducer = signup(state, { type: types.PASSWORD_CHANGED, payload: 'gha@#12$' });
    expect(reducer).toEqual(newState);
  });

  it('should return state with updated confirm password', () => {
    const newState = { ...state };
    newState.confirm_password = 'gha@#12$';
    const reducer = signup(state, { type: types.CONFIRM_PASSWORD_CHANGED, payload: 'gha@#12$' })
    expect(reducer).toEqual(newState);
  });

  it('should return state with error when any occurs', () => {
    const newState = { ...state };
    newState.error = 'Please provide a valid email';
    const reducer = signup(state, { type: types.ERROR, payload: 'Please provide a valid email' });
    expect(reducer).toEqual(newState);
  });
});
