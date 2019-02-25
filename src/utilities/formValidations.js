// eslint-disable-next-line import/prefer-default-export
export const FormValidation = (formError, username, password) => {
  let valide = true;
  // validation for each form field during user login
  Object.values(formError).forEach(val => {
    val.length > 0 && (valide = false);
  });
  // validtion to check where the username field is empty
  if (username === '' && password === '') {
    valide = false;
  }
  return valide;
};
