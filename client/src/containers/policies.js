import React, { Component } from 'react';

import Header from '../components/shared/header.js';
import Footer from '../components/shared/footer.js';
import PrivacyPolicy from '../components/policies/privacyPolicy.js';
import TermsAndConditions from '../components/policies/termsAndConditions.js';

export default Policies extends Component {
  render() {
    return (
        <Header />
        <TermsAndConditions />
        <PrivacyPolicy />
        <Footer />
    )
  }
}
