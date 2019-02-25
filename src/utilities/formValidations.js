// eslint-disable-next-line import/prefer-default-export
export const FormValidation = (username, password) => {
  let valide = true;
  if (username === '' && password === '') {
    valide = false;
  }
  return valide;
};
