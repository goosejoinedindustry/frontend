export default (render) => {
   // Cookie Agreement
  render('/policies/cookies', {
    title: 'Industry | Cookies'
  });
  // Terms and Condintions Agreement
  render('/policies/terms', {
    title: 'Industry | Terms & Condintions'
  });
  // Data Agreement
  render('/policies/data', {
    title: 'Industry | Data'
  });
};
