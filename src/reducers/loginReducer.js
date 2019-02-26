import { LOGIN_ERROR } from '../actions/types';

// initial state of the object
const initialState = {
  login_errors: {}
};
// the reducer function that is responsible for handling the actions
// eslint-disable-next-line import/prefer-default-export
export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ERROR:
      console.log('reducer');
      return {
        ...state,
        login_errors: action.payload
      };
    default:
      return state;
  }
}
