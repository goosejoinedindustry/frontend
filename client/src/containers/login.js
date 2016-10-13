import React, { Component } from 'react';

import LoginForm from '../components/login/loginForm';
import SignupForm from '../components/signup/signupForm';
import FacebookLogin from '../components/login/facebookLogin';
import ForgotPassword from '../components/login/utility/forgotPassword';

export default class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm />
        <SignupForm />
        <FacebookLogin />
        <ForgotPassword />
      </div>
    );
  }
}
