// eslint-disable-next-line import/prefer-default-export
export const LogiUser = userdata => dispatch => {
  // making request call to the api
  // eslint-disable-next-line no-undef
  fetch(``, {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(userdata)
  })
    .then(response => response.json)
    .then(response => {
      // eslint-disable-next-line prefer-destructuring
      const userToken = response.user_token;
      // eslint-disable-next-line no-undef
      localStorage.setItem('user_token', userToken);
      dispatch({
        type: '',
        payload: ''
      });
    });
};
