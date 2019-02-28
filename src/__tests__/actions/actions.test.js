import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { LoginUser } from '../../actions/loginAction';
import { LOGIN_ERROR } from '../../actions/types';

const middleWare = [thunk];
const mockStore = configureStore(middleWare);
// eslint-disable-next-line no-undef
describe('test login action', () => {
  // eslint-disable-next-line no-undef
  it('test login fetch request', () => {
    fetchMock.postOnce('http://127.0.0.1:5000/api/v1/auth/login', {
      body: { username: 'anyatibria', password: '0781901036' },
      headers: { 'content-type': 'application/json' }
    });
    // declaring the expected data
    const expectedAction = [
      {
        type: LOGIN_ERROR,
        message: 'username and password does not exist'
      }
    ];
    const store = mockStore({});
    return store
      .dispatch(
        LoginUser({
          username: 'anyatibria',
          password: '0781901036'
        })
      )
      .then(() => {
        // eslint-disable-next-line no-undef
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});
