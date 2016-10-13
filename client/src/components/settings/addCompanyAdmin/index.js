import React, { Component } from 'react';
import AddButton from '../utility/addButton';
import BusinessSelector from '../utility/businessSelector';
import UserSelector from '../utility/userSelector';

export default class AddCompanyAdmin extends Component {
  render() {
    return (
      <div>
        <h4>
            Add Company Admin
        </h4>
        <p>
            Select a business and user to give account access to.
        </p>
        <BusinessSelector />
        <UserSelector />
        <AddButton />
      </div>
        );
  }
}
