import React, { Component } from 'react';
import DeleteButton from '../utility/deleteButton.js';

export default DeleteAccount extends Component {
  render() {
    return (
        <div>
            <h4> Delete Account </h4>
            <p> This will deactivate your account. </p>
            <DeleteButton />
        </div>
    )
  }
}
