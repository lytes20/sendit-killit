import { LOGIN_ERROR, USER_LOGIN } from '../actions/types';

// initial state of the object
const initialState = {
  accessToken: false,
  login_errors: {}
};
// the reducer function that is responsible for handling the actions

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        accessToken: true
      };
      // eslint-disable-next-line
      break;
    case LOGIN_ERROR:
      return {
        ...state,
        login_errors: action.payload
      };
    default:
      return state;
  }
};
