import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SignupForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email" />
          </div>
          <div>
            <label htmlFor="zipcode">Zip Code</label>
            <Field name="zipcode" component="input" type="number" />
          </div>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="lastName">First Name</label>
            <Field name="lastName" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field name="phoneNumber" component="input" type="number" />
          </div>
          <button type="submit" disabled={submitting || pristine}>Sign Up</button>
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: 'SignupForm',
})(SignupForm);
