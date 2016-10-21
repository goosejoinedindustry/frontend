import React from 'react';
import { Link } from 'react-router';
import { BottomNavigation } from 'material-ui';

require('./scss/footer.scss');

export default class Footer extends React.Component {

  render() {
    const blogURL = 'http://blog.industry.co/';
    const helpURL = 'https://www.industry.co/help/';
    const termsURL = 'https://www.industry.co/licenses/terms.html';
    const privacyURL = 'https://www.industry.co/licenses/privacy.html';

    return (
      <BottomNavigation>
        <footer className="footer" style={{ padding: '0px' }}>
          <section>
            <section className="links">
              <Link
                style={{ paddingLeft: '0px' }}
                to={blogURL}
                target="_blank"
              >
                    Blog
              </Link>

                  &nbsp;·&nbsp;

              <Link
                to={helpURL}
                target="_blank"
              >
                  Help
              </Link>

                  &nbsp;·&nbsp;

              <Link
                to={termsURL}
                target="_blank"
              >
                   Terms and Conditions
              </Link>

                  &nbsp;·&nbsp;

              <Link
                to={privacyURL}
                target="_blank"
              >
                    Privacy Policy
              </Link>
            </section>
            <p className="copyrightDesktop"> · Industry Careers, Inc. &copy; 2016</p>
            <p className="copyrightMobile">Industry Careers, Inc. &copy; 2016</p>
          </section>
        </footer>
      </BottomNavigation>
        );
  }
}
