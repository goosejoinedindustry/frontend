import React from 'react';
import { Link } from 'react-router';

require('./scss/footer.scss');

export class Footer extends React.Component {

  render() {
    const blogURL = 'http://blog.industry.co/';
    const helpURL = 'https://www.industry.co/help/';
    const termsURL = 'https://www.industry.co/licenses/terms.html';
    const privacyURL = 'https://www.industry.co/licenses/privacy.html';

    return (
      <footer className="footer">
        <section>
          <section className="links">
            <Link style={{ paddingLeft: '0px' }} to={blogURL} target="_blank" >Blog</Link> · <Link to={helpURL} target="_blank" >Help</Link> · <Link to={termsURL} target="_blank" >Terms and Conditions</Link> · <Link to={privacyURL} target="_blank" >Privacy Policy</Link>
          </section>
          <p className="copyrightDesktop"> · Industry Careers, Inc. &copy; 2016</p>
          <p className="copyrightMobile">Industry Careers, Inc. &copy; 2016</p>
        </section>
      </footer>
    );
  }
}

export default Footer;
