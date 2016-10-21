import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';

const validate = (values) => {
  const errors = {};
  const requiredFields = ['firstName', 'lastName', 'email', 'confirmEmail', 'phoneNumber', 'confirmPhoneNumber', 'zipcode', 'birthday', 'employed'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (values.email !== values.confirmEmail) {
    errors.confirmEmail = 'Please Confirm Email';
  }
  if (values.phoneNumber !== values.confirmPhoneNumber) {
    errors.confirmPhoneNumber = 'Please Confirm Phone Number';
  }
  return errors;
};

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);
const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);
const renderDatePicker = ({ input, meta: { touched, error } }) => (
  <DatePicker
    hintText="What is your birthday?"
    errorText={touched && error}
    {...input}
    locale="en-US"
    firstDayOfWeek={0}
    value={input.value !== '' ? new Date(input.value) : null}
    onChange={(event, value) => { console.log(value); input.onChange(value); }}
  />
);

class SignupForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <Field name="firstName" component={renderTextField} label="First Name" />
          </div>
          <div>
            <Field name="lastName" component={renderTextField} label="Last Name" />
          </div>
          <div>
            <Field name="email" component={renderTextField} label="Email" />
          </div>
          <div>
            <Field name="confirmEmail" component={renderTextField} label="Confirm Email" />
          </div>
          <div>
            <Field name="phoneNumber" type="number" component={renderTextField} label="Phone Number" />
          </div>
          <div>
            <Field name="confirmPhoneNumber" type="number" component={renderTextField} label="Confirm Phone Number" />
          </div>
          <div>
            <Field name="zipcode" type="number" component={renderTextField} label="Zipcode" />
          </div>
          <div>
            <Field name="Birthday" component={renderDatePicker} label="Birthday" />
          </div>
          <div>
            <Field name="employed" component={renderCheckbox} label="Accept the Terms" />
          </div>
          <RaisedButton type="submit" disabled={pristine || submitting} label="Submit" primary />
          <RaisedButton onClick={reset} disabled={pristine || submitting} label="Clear Values" default />
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: 'SignupForm',
  validate
})(SignupForm);
