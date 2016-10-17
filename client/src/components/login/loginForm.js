import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>

        <button type="submit" disabled={submitting || pristine}>Submit</button>
      </form>
    );
  }
}
export default reduxForm({
  form: 'loginForm'
})(LoginForm);
