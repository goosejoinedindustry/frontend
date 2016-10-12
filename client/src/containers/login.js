import React, { Component } from 'react';

import LoginForm from '../components/login/loginForm.js';
import FacebookLogin from '../components/login/facebookLogin.js';
import SignupForm from '../components/signup/signupForm.js';
import ForgotPassword from '../components/login/forgotPassword.js';

export default Login extends Component {
  render() {
    return (
      <LoginForm />
      <SignupForm />
      <FacebookLogin />
      <ForgotPassword />
    )
  }
}
