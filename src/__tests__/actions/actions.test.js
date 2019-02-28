import configureStore from 'redux-mock-store';
import thunck from 'redux-thunk';
import { LOGIN_ERROR } from '../../actions/types';
import { LoginUser } from '../../actions/loginAction';

const middleWare = [thunck];
const mockStore = configureStore(middleWare);

// eslint-disable-next-line no-undef
describe('actions for logging in user', () => {
  // eslint-disable-next-line no-undef
  it('test the login actions', () => {
    // actions from
    const data = {
      username: 'anyati',
      password: '0781901036'
    };
    const expectedActions = [
      {
        type: LOGIN_ERROR,
        payload: { message: 'username and password does not exits' }
    }];
    const store = mockStore({});
    // Return the promise
  });
});
