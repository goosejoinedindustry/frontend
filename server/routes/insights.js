export default (render) => {
  // User Insights
  render('/insights');
  // Business insights
  render('/:username/insights');
};
