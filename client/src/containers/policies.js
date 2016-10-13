import React, { Component } from 'react';

import Header from '../components/shared/header';
import Footer from '../components/shared/footer';
import PrivacyPolicy from '../components/policies/privacyPolicy';
import TermsAndConditions from '../components/policies/termsAndConditions';

export default class Policies extends Component {
  render() {
    return (
      <div>
        <Header />
        <TermsAndConditions />
        <PrivacyPolicy />
        <Footer />
      </div>
    );
  }
}
