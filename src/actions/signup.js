import * as types from './types';

export const onFirstNameChange = firstname => {
  return {
    type: types.FIRSTNAME_CHANGED,
    payload: firstname
  };
};

export const onLastNameChange = lastname => {
  return {
    type: types.LASTNAME_CHANGED,
    payload: lastname
  };
};

export const onUsernameChange = username => {
  return {
    type: types.USERNAME_CHANGED,
    payload: username
  };
};

export const onEmailChange = email => {
  return {
    type: types.EMAIL_CHANGED,
    payload: email
  };
};

export const onPhoneChange = phone => {
  return {
    type: types.PHONE_CHANGED,
    payload: phone
  };
};

export const onPasswordChange = password => {
  return {
    type: types.PASSWORD_CHANGED,
    payload: password
  };
};

export const onConfirmPasswordChange = confirm_password => {
  return {
    type: types.CONFIRM_PASSWORD_CHANGED,
    payload: confirm_password
  };
};

export const onRegisterUser = user => {
  return dispatch => {
    const { firstname, lastname, username, email, phone, password, confirm_password } = user;

    const register = () => {
      dispatch({ type: types.REGISTER_START });

      dispatch({ type: types.REGISTER_START });

      const data = {
        first_name: firstname,
        last_name: lastname,
        email,
        phone_contact: phone,
        username,
        user_password: password
      };
      const url = 'https://francissendit.herokuapp.com/api/v2/auth/signup';

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          data['message'] || data['Message'] === 'You registered successfully, Please Login'
            ? dispatch({ type: types.REGISTER_SUCCESS })
            : dispatch({ type: types.REGISTER_FAILED, payload: data['message'] || data['Message'] });
        })
        .catch(error => dispatch({ type: types.REGISTER_FAILED, payload: 'Please check your network connection' }));
    };

    const format = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    // Validate input values
    // check for empty firstname string
    firstname.trim().length === 0
      ? dispatch({ type: types.ERROR, payload: 'Please provide your firstname' })

      : // Check for numbers in firstname
      /\d/.test(firstname)
      ? dispatch({
          type: types.ERROR,
          payload: 'Please provide a valid firstname i.e no numbers'
        })

      : // Check for special characters in firstname
      format.test(firstname)
      ? dispatch({
          type: types.ERROR,
          payload: 'Please provide a valid firstname i.e no special characters'
        })

      : // Check for empty lastname string
      lastname.trim().length === 0
      ? dispatch({ type: types.ERROR, payload: 'Please provide your lastname' })

      : // Check for numbers in lastname
      /\d/.test(lastname)
      ? dispatch({
          type: types.ERROR,
          payload: 'Please provide a valid lastname i.e no numbers'
        })

      : // Check for special charaters in lastname
      format.test(lastname)
      ? dispatch({
          type: types.ERROR,
          payload: 'Please provide a valid lastname i.e no special characters'
        })

      : // Check for empty username string
      username.trim().length === 0
      ? dispatch({ type: types.ERROR, payload: 'Please provide a username' })

      : // Check if email string is empty
      email.trim().length === 0
      ? dispatch({ type: types.ERROR, payload: 'please provide an email' })

      : // Check if email is invalid
      !emailFormat.test(email)
      ? dispatch({ type: types.ERROR, payload: 'Please provide a valid email' })

      : // Check for empty phone string
      phone.trim().length === 0
      ? dispatch({ type: types.ERROR, payload: 'Please provide your phone number' })

      : // Check if phone string contains numbers only
      !/\d/.test(phone)
      ? dispatch({
          type: types.ERROR,
          payload: 'Phone field can only contain numbers ie no spaces'
        })

      : password.trim().length === 0
      ? dispatch({ type: types.ERROR, payload: 'Please provide a password' })

      : // Check if password exceeds 6 characters
      password.length < 6
      ? dispatch({
          type: types.ERROR,
          payload: 'Password must have more than 6 characters'
        })
      : // Check if passwords match
      password !== confirm_password
      ? dispatch({ type: types.ERROR, payload: "Your passwords don't, please double check" })
      
      : // If all is valid then register user
        register(dispatch, user);
  };
};
