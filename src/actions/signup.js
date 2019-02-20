import {
  FIRSTNAME_CHANGED,
  LASTNAME_CHANGED,
  USERNAME_CHANGED,
  PHONE_CHANGED,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CONFIRM_PASSWORD_CHANGED,
  ERROR
} from "./types";

export const onFirstNameChange = firstname => {
  return {
    type: FIRSTNAME_CHANGED,
    payload: firstname
  };
};

export const onLastNameChange = lastname => {
  return {
    type: LASTNAME_CHANGED,
    payload: lastname
  };
};

export const onUsernameChange = username => {
  return {
    type: USERNAME_CHANGED,
    payload: username
  };
};

export const onEmailChange = email => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  };
};

export const onPhoneChange = phone => {
  return {
    type: PHONE_CHANGED,
    payload: phone
  };
};

export const onPasswordChange = password => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
};

export const onConfirmPasswordChange = confirm_password => {
  return {
    type: CONFIRM_PASSWORD_CHANGED,
    payload: confirm_password
  };
};

export const onRegisterUser = user => {
  return dispatch => {
    const {
      firstname,
      lastname,
      username,
      email,
      phone,
      password,
      confirm_password
    } = user;

    const phone_num = Number(phone);

    const format = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    // Validate input values
    firstname.trim().length === 0 // check for empty firstname string
      ? dispatch({ type: ERROR, payload: "Please provide your firstname" })
      : /\d/.test(firstname) // Check for numbers in firstname
      ? dispatch({
          type: ERROR,
          payload: "Please provide a valid firstname i.e no numbers"
        })
      : format.test(firstname) // Check for special characters in firstname
      ? dispatch({
          type: ERROR,
          payload: "Please provide a valid firstname i.e no special characters"
        })
      : lastname.trim().length === 0 // Check for empty lastname string
      ? dispatch({ type: ERROR, payload: "Please provide your lastname" })
      : /\d/.test(lastname) // Check for numbers in lastname
      ? dispatch({
          type: ERROR,
          payload: "Please provide a valid lastname i.e no numbers"
        })
      : format.test(lastname) // Check for special charaters in lastname
      ? dispatch({
          type: ERROR,
          payload: "Please provide a valid lastname i.e no special characters"
        })
      : username.trim().length === 0 // Check for empty username string
      ? dispatch({ type: ERROR, payload: "Please provide a username" })
      : email.trim().length === 0 // Check if email string is empty
      ? dispatch({ type: ERROR, payload: "please provide an email" })
      : !emailFormat.test(email) // Check if email is invalid
      ? dispatch({ type: ERROR, payload: "Please provide a valid email" })
      : phone.trim().length === 0 // Check for empty phone string
      ? dispatch({ type: ERROR, payload: "Please provide your phone number" })
      : !/\d/.test(phone_num) // Check if phone string contains numbers only
      ? dispatch({
          type: ERROR,
          payload: "Phone field can only contain numbers ie no spaces"
        })
      : password.trim().length === 0
      ? dispatch({ type: ERROR, payload: "Please provide a password" })
      : password.length < 6 // Check if password exceeds 6 characters
      ? dispatch({
          type: ERROR,
          payload: "Password must have more than 6 characters"
        })
      : password !== confirm_password // Check if passwords match
      ? dispatch({ type: ERROR, payload: "Your passwords don't, please double check" })
      : dispatch({ type: ERROR, payload: "" });
  };
};
