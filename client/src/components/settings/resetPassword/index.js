import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardActions, RaisedButton } from 'material-ui';
import { connect } from 'react-redux';

import { resetPassword } from '../settingAction';

class ResetPassword extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          title="Reset Password"
        />
        <CardText>
         A Message with a reset link will be sent to the email address associated with your account.
        </CardText>
        <CardActions>
          <RaisedButton
            label={'Reset'}
            primary
            onClick={this.props.resetPassword}
          />
        </CardActions>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    resetPassword: state.resetPassword
  };
}

export default connect(mapStateToProps, {
  resetPassword,
})(ResetPassword);
