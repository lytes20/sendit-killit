import loginReducer from '../../reducers/loginReducer';
import { LOGIN_ERROR } from '../../actions/types';

// eslint-disable-next-line no-undef
describe('testing the reducer', () => {
  const initialState = {
    login_errors: {}
  };
  // eslint-disable-next-line no-undef
  it('load the initial state', () => {
    const newState = loginReducer(initialState, {});
    // eslint-disable-next-line no-undef
    expect(newState).toBe(initialState);
  });
  // eslint-disable-next-line no-undef
  it('loads the state when it recieves and action', () => {
    const serverRes = { message: 'username and password does not exist' }
    const newstate = loginReducer(initialState, {
      type: LOGIN_ERROR,
      payload: serverRes
    });
    // eslint-disable-next-line no-undef
    expect(newstate).toEqual({ ...initialState, login_errors: serverRes });
  });
});
