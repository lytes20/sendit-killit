export default () => {
  return Promise.resolve({
    json: () => Promise.resolve([{ message: 'username and password does not exist' }])
  });
}