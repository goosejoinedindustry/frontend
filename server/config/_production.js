export default (config) => {
  const overrides = {
    apiUrl: 'http://industry-api.herokuapp.com'
  };
  return () => Object.assign({}, config, overrides);
};
