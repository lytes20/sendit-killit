/* eslint-disable no-undef */
import { LOGIN_ERROR, USER_LOGIN } from '../../actions/types';
import loginReducer from '../../reducers/loginReducer';

// eslint-disable-next-line no-undef
describe('login reducer', () => {
  const initialState = {
    accessToken: false,
    login_errors: {}
  };
  // testing the initial state of the reducer
  it('initial state of the reducers', () => {
    const newState = loginReducer(initialState, {});
    expect(newState).toBe(initialState);
  });
  // testing whether the reducer returns errors from the server
  it('loads the errors', () => {
    const errorMessage = {
      message: 'username and password does not exist'
    };
    const newState = loginReducer(initialState, {
      type: LOGIN_ERROR,
      payload: errorMessage
    });
    expect(newState).toEqual({ ...initialState, login_errors: errorMessage });
  });
  // test for the authentication for the users
  it('test user authenticated', () => {
    const newState = loginReducer(initialState, {
      type: USER_LOGIN
    });
    expect(newState).toEqual({ ...initialState, accessToken: true });
  });
});
