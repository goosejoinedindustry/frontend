import React, { Component } from 'react';

import ResetPassword from '../components/settings/resetPassword';
import DeleteAccount from '../components/settings/deleteAccount';
import AddCompanyAdmin from '../components/settings/addCompanyAdmin';
import DeleteBusinessAccount from '../components/settings/deleteBusinessAccount';

export default class Settings extends Component {
  render() {
    return (
      <div>
        <ResetPassword />
        <DeleteAccount />
        <AddCompanyAdmin />
        <DeleteBusinessAccount />
      </div>
    );
  }
}
