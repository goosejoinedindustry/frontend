export default (config) => {
  const overrides = { };
  return () => Object.assign({}, config, overrides);
};
