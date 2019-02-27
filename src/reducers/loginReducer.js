import { LOGIN_ERROR } from '../actions/types';

// initial state of the object
const initialState = {
  login_errors: {}
};
// the reducer function that is responsible for handling the actions

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        login_errors: action.payload
      };
    default:
      return state;
  }
}
