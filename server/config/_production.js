export default (config) => {
  const overrides = {
    api_url: 'http://industry-api.herokuapp.com'
  };
  return Object.assign({}, config, overrides);
};
