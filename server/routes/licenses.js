export default (render) => {
  // Terms and Condintions Agreement
  render('/licenses/privacy', {
    title: 'Industry | Terms & Condintions'
  });
  // Data Agreement
  render('/licenses/terms', {
    title: 'Industry | Data'
  });
};
