import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

const validate = (values) => {
  const errors = {};
  const requiredFields = ['firstName', 'lastName', 'email', 'confirmEmail', 'phoneNumber', 'confirmPhoneNumber', 'zipcode', 'age', 'birthday'];
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
const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);
const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);
const renderDatePicker = ({ input, label, meta: { touched, error }, ...custom }) => (
  <DatePicker hintText="What is your birthday?" />
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
            <Field name="zipcode" type="number" component={renderTextField} label="Zip Code" />
          </div>
          <div>
            <Field name="age" component={renderSelectField} label="Select Age">
              <MenuItem value={'ff0000'} primaryText="Young" />
              <MenuItem value={'00ff00'} primaryText="Old" />
              <MenuItem value={'0000ff'} primaryText="Dead" />
            </Field>
          </div>
          <div>
            <Field name="birthday" component={renderDatePicker} label="Select Birthday" />
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
