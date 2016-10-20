import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

class LoginForm extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="firstName" component={renderTextField} type="email" label="First Name" />
        </div>
        <div>
          <Field name="lastName" component={renderTextField} type="password" label="Last Name" />
        </div>
        <button type="submit" disabled={submitting || pristine}>Submit</button>
      </form>
    );
  }
}
export default reduxForm({
  form: 'loginForm'
})(LoginForm);
