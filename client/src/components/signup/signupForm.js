import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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
            <Field name="confirm email" component={renderTextField} label="Confirm Email" />
          </div>
          <div>
            <Field name="phoneNumber" component={renderTextField} label="Phone Number" />
          </div>
          <div>
            <Field name="confirm phoneNumber" component={renderTextField} label="Confirm Phone Number" />
          </div>
          <div>
            <Field name="zipcode" component={renderTextField} label="Zip Code" />
          </div>
          <div>
            <Field name="age" component={renderSelectField} label="Select Age">
              <MenuItem value={'ff0000'} primaryText="Young" />
              <MenuItem value={'00ff00'} primaryText="Old" />
              <MenuItem value={'0000ff'} primaryText="Dead" />
            </Field>
          </div>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values
          </button>
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: 'SignupForm',
})(SignupForm);
