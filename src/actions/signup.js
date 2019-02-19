import {
  FIRSTNAME_CHANGED,
  LASTNAME_CHANGED,
  PHONE_CHANGED,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  CONFIRM_PASSWORD_CHANGED
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
