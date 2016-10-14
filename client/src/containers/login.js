import React, { Component } from 'react';
import { connect } from 'react-redux';
// COMPONENTS
import LoginForm from '../components/login/loginForm';
import SignupForm from '../components/signup/signupForm';
import FacebookLogin from '../components/login/facebookLogin';
import ForgotPassword from '../components/login/utility/forgotPassword';

// ACTIONS
import { loginFormAction } from '../components/login/loginAction';


class Login extends Component {
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
    this.props.loginFormAction(values);
  }
  signInFormSubmit(values) {
    console.log('signed up.... redirecting', values)
  }
  render() {
    console.log('base form--------', this.props.login);
    return (
      <div>
        <LoginForm loginInfo = {this.props.login} onSubmit={this.loginFormSubmit.bind(this)}/>
        <h1>-------------------------------</h1>
        <SignupForm onSubmit={this.signInFormSubmit.bind(this)}/>
        <FacebookLogin />
        <ForgotPassword />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.emailLogin
  }
}
export default connect(mapStateToProps, {loginFormAction})(Login);
