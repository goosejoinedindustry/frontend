import React, { Component } from 'react';
import ResetButton from '../utility/resetButton.js';

export default ResetPassword extends Component {
  render() {
    return (
        <div>
            <h4> Reset Password </h4>
            <p> A Message with a reset link will be sent to the email address associated with your account. </p>
            <ResetButton />
        </div>
    )
  }
}
