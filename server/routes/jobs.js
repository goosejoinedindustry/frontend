export default (render) => {
   // Jobs
  render('/jobs', {
    title: 'Industry | Jobs'
  });

  // Individual Listing
  render('/jobs/:listingId');
};
