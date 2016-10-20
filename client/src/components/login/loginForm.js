import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const validate = (values) => {
  const errors = {};
  const requiredFields = ['email', 'password'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};
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
          <Field name="email" component={renderTextField} label="Email" />
        </div>
        <div>
          <Field name="password" component={renderTextField} type="password" label="Password" />
        </div>
        <RaisedButton type="submit" disabled={pristine || submitting} label="Submit" primary />
      </form>
    );
  }
}
export default reduxForm({
  form: 'loginForm',
  validate
})(LoginForm);
