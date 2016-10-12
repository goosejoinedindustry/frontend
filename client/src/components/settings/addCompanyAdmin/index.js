import React, { Component } from 'react';
import AddButton from '../utility/addButton.js';
import BusinessSelector from '../utility/businessSelector.js';
import UserSelector from '../utility/userSelector.js';

export default AddCompanyAdmin extends Component {
  render() {
    return (
        <div>
            <h4> Add Company Admin </h4>
            <p> Select a business and user to give account access to. </p>
            <BusinessSelector />
            <UserSelector />
            <AddButton />
        </div>
    )
  }
}
