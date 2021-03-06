import React, { Component } from 'react';
import { connect } from 'react-redux';
// COMPONENTS
import LoginForm from '../components/login/loginForm';
import SignupForm from '../components/signup/signupForm';
import FacebookLogin from '../components/login/facebookLogin';
import ForgotPassword from '../components/login/utility/forgotPassword';

// ACTIONS
import { loginFormAction } from '../components/login/loginAction';
import { signupFormAction } from '../components/signup/signupAction';


class Login extends Component {
  // static contextTypes = {
  //   router: PropTypes.object
  // }
  // redirect() {
  //   // this.props.loginAction(props)
  //   //   .then(() => {
  //   //     // form has been submitted, navigate user to custom route
  //   //     // this.context.router.push('/profilePage');
  //   //   })
  // }
  loginFormSubmit(values) {
    this.props.loginFormAction(values);
  }
  signInFormSubmit(values) {
    console.log(values, 'in signinform submit');
    this.props.signupFormAction(values);
  }
  render() {
    console.log('base form--------', this.props.login);
    console.log('sign up FORMasdfdasfasd', this.props.signup);
    return (
      <div>
        <SignupForm onSubmit={this.signInFormSubmit.bind(this)} />
        <FacebookLogin />
        <ForgotPassword />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login  : state.emailLogin,
    signup : state.emailSignup
  };
}
export default connect(mapStateToProps, {
  loginFormAction,
  signupFormAction,
})(Login);
