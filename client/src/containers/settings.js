import React, { Component } from 'react';

import Header from '../components/shared/header.js';
import Footer from '../components/shared/footer.js';
import ResetPassword from '../components/settings/resetPassword.js';
import DeleteAccount from '../components/settings/deleteAccount.js';

export default Settings extends Component {
  render() {
    return (
        <Header />
        <ResetPassword />
        <DeleteAccount />
        <AddCompanyAdmin />
        <DeleteBusinessAccount />
        <Footer />
    )
  }
}
