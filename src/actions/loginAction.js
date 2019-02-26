import { LOGIN_ERROR } from './types';
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
    .then(data =>
      dispatch({
        type: LOGIN_ERROR,
        payload: data
      })
    );
};
