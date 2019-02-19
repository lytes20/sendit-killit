import {
  FIRSTNAME_CHANGED,
  LASTNAME_CHANGED,
  EMAIL_CHANGED,
  PHONE_CHANGED,
  PASSWORD_CHANGED,
  CONFIRM_PASSWORD_CHANGED
} from "../actions/types";

const INITIAL_STATE = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  password: "",
  confirm_password: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIRSTNAME_CHANGED:
      return { ...state, firstname: action.payload };

    case LASTNAME_CHANGED:
      return { ...state, lastname: action.payload };

    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case PHONE_CHANGED:
      return { ...state, phone: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case CONFIRM_PASSWORD_CHANGED:
      return { ...state, confirm_password: action.payload };

    default:
      return state;
  }
};
