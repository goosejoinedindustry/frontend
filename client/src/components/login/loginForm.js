import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import _ from 'lodash';
const FIELDS = {
  email: {
    type: 'input',
    label: 'Enter your email'
  },
  password: {
    type: 'input',
    label: 'Enter your password'
  }
}
class LoginForm extends Component {
  // static contextTypes = {
  //   router: PropTypes.object
  // }
  onSubmit(props) {
    console.log('login form submitted');
    // this.props.loginAction(props)
    //   .then(() => {
    //     // form has been submitted, navigate user to custom route
    //     // this.context.router.push('/profilePage');
    //   })
  }
  render() {
    const { fields: {email, password}, handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div>
            <label>First Name</label>
            <input type="text" className="form-control" {...email} />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" className="form-control" {...password} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default reduxForm({
  form: 'LoginForm',
  fields: _.keys(FIELDS),
})(LoginForm);
