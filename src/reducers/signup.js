import * as types from "../actions/types";

const INITIAL_STATE = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  phone: "",
  password: "",
  confirm_password: "",
  error: '',
  loading: false,
  redirect: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FIRSTNAME_CHANGED:
      return { ...state, firstname: action.payload };

    case types.LASTNAME_CHANGED:
      return { ...state, lastname: action.payload };

    case types.USERNAME_CHANGED:
      return { ...state, username: action.payload };

    case types.EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case types.PHONE_CHANGED:
      return { ...state, phone: action.payload };

    case types.PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case types.CONFIRM_PASSWORD_CHANGED:
      return { ...state, confirm_password: action.payload };

    case types.ERROR:
      return { ...state, error: action.payload }

    case types.REGISTER_START:
      return { ...state, error: '', loading: true }

    case types.REGISTER_SUCCESS:
      return { ...state, error: '', loading: false, redirect: true }

    case types.REGISTER_FAILED:
      return { ...state, error: action.payload, loading: false }

    default:
      return state;
  }
};
