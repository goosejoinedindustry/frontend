import React, { Component } from 'react';
// COMPONENTS
import LoginForm from '../components/login/loginForm';
import SignupForm from '../components/signup/signupForm';
import FacebookLogin from '../components/login/facebookLogin';
import ForgotPassword from '../components/login/utility/forgotPassword';

// ACTIONS
import loginAction from '../components/login/loginAction/index.js';


export default class Login extends Component {
  // static contextTypes = {
  //   router: PropTypes.object
  // }
  redirect() {
    // this.props.loginAction(props)
    //   .then(() => {
    //     // form has been submitted, navigate user to custom route
    //     // this.context.router.push('/profilePage');
    //   })
  }
  loginFormSubmit(values) {
    console.log('here are the login values', values)
    loginAction(values);
  }
  signInFormSubmit(values) {
    console.log('signed up.... redirecting', values)
  }
  render() {
    return (
      <div>
        <LoginForm onSubmit={this.loginFormSubmit.bind(this)}/>
        <h1>-------------------------------</h1>
        <SignupForm onSubmit={this.signInFormSubmit.bind(this)}/>
        <FacebookLogin />
        <ForgotPassword />
      </div>
    );
  }
}
