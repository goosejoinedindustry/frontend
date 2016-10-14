const TWITTER_HANDLE = '@theindustry';

export default (render) => {
  // Home Page for login and signup
  render('/', {
    title: 'Industry',
    ogTags: [
        { key: 'title', tag: 'Industry' },
        { key: 'description', tag: 'Industry is a professional network and hiring solution exclusively for the service and hospitality industry. We make it easy to discover great jobs and recruit top talent. Sign up today.' },
        { key: 'url', tag: 'https://www.industry.co/' },
        // TODO: Add image url
        // { key: 'image', tag: 'image url'},
        // TODO: Add branding video tag
        // { key: 'video', tag:'branding video'}
    ],
    twitterTags: [
        { key: 'card', tag: 'summary_large_image' },
        // TODO: Add Twitter image
        // { key: 'image', tag: '' },
        { key: 'title', tag: 'Industry' },
        { key: 'site', tag: TWITTER_HANDLE },
        { key: 'creator', tag: TWITTER_HANDLE },
        { KEY: 'description', tage: 'Industry is a professional network and hiring solution exclusively for the service and hospitality industry. Sign up today!' }
    ]
  });

  // Launch page for business customers
  render('/business', {
    title: 'Industry Business'
  });
};
