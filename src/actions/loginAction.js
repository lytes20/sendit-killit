import { LOGIN_ERROR, USER_LOGIN } from './types';
// eslint-disable-next-line import/prefer-default-export
export const LoginUser = userdata => dispatch => {
  // making request call to the api
  // eslint-disable-next-line no-undef
  console.log('fetching');
  // eslint-disable-next-line no-undef
  fetch('http://127.0.0.1:5000/api/v1/auth/login', {
    method: 'post',
    body: JSON.stringify(userdata)
  })
    .then(response => response.json())
    .then(data => {
      // eslint-disable-next-line no-empty
      if (data['access-token']) {
        dispatch({ type: USER_LOGIN });
        // eslint-disable-next-line no-undef
        localStorage.setItem('authToken', data['access-token']);
        // eslint-disable-next-line no-undef
        console.log(localStorage.getItem('authToken'));
      } else {
        dispatch({
          type: LOGIN_ERROR,
          payload: data
        });
      }
    });
};
