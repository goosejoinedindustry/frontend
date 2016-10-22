import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardActions, RaisedButton, Dialog, FlatButton } from 'material-ui';
import { connect } from 'react-redux';
import { deleteAccount } from '../settingAction';

class DeleteAccount extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDeleteAndClose = () => {
    this.setState({ open: false });
    this.props.deleteAccount();
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Delete"
        primary
        onTouchTap={this.handleDeleteAndClose}
      />,
    ];

    return (
      <Card>
        <CardHeader
          title="Delete Account"
        />
        <CardText>
         This will deactivate your account.
        </CardText>
        <CardActions>
          <RaisedButton
            label={'Delete'}
            onTouchTap={this.handleOpen}
          />
        </CardActions>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Are you sure?
        </Dialog>
      </Card>
    );
  }
}
function mapStateToProps(state) {
  return {
    deleteAccount: state.deleteAccount
  };
}
export default connect(mapStateToProps, {
  deleteAccount,
})(DeleteAccount);
