import { USER_LOGIN, LOGIN_ERROR } from './types';
// eslint-disable-next-line import/prefer-default-export
export const LogiUser = userdata => dispatch => {
  // making request call to the api
  // eslint-disable-next-line no-undef
  fetch(`https://francissendit.herokuapp.com/api/v2/auth/login`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userdata)
  })
    .then(response => response.json)
    .then(response => {
      // eslint-disable-next-line prefer-destructuring
      const userToken = response.user_token;
      console.log(userToken);
      // eslint-disable-next-line no-undef
      localStorage.setItem('user_token', userToken);
    })
    .catch(error =>
      dispatch({
        // loading server errors incase the authentication fails
        type: LOGIN_ERROR,
        payload: error.message
      })
    );
};
