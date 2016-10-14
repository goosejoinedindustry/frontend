export default (render) => {
  render('/jobs', {
    title: 'Industry | Jobs'
  });
  render('/jobs/:listingId');
};
