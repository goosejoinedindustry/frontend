import React, { Component } from 'react';

import PrivacyPolicy from '../components/policies/privacyPolicy';
import TermsAndConditions from '../components/policies/termsAndConditions';

export default class Policies extends Component {
  render() {
    return (
      <div>
        <TermsAndConditions />
        <PrivacyPolicy />
      </div>
    );
  }
}
