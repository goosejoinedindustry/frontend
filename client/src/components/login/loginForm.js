import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';

const FIELDS = {
  email: {
    type: 'input',
    label: 'Enter your email'
  },
  password: {
    type: 'input'
    label: 'Enter your password'
  }
}

class LoginForm extends Component {
  // static contextTypes = {
  //   router: PropTypes.object
  // }
  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // form has been submitted, navigate user to custom route
        // this.context.router.push('/profilePage');
      });
  }
  render() {
    const { handleSubmit } = props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <label>First Name</label>
          <div>
            <Field name="firstName" component="input" type="text" placeholder="First Name"/>
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
          </div>
        </div>
        <div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'LoginForm',
  fields: _.keys(FIELDS),
})(LoginForm);
