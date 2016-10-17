import React, { Component } from 'react';
import BusinessSelector from '../utility/businessSelector';
import DeleteButton from '../utility/deleteButton';

export default class DeleteBusinessAccount extends Component {
  render() {
    return (
      <div>
        <h4> Delete Business Account </h4>
        <p> This will delete your business account. </p>
        <BusinessSelector />
        <DeleteButton />
      </div>
    );
  }
}
