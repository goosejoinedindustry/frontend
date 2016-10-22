import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RaisedButton, Card, CardHeader, CardText, CardActions, FlatButton, Dialog } from 'material-ui';
import BusinessSelector from '../utility/businessSelector';

import { deleteBusinessAccount } from '../settingAction';

class DeleteBusinessAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled   : true,
      value      : false,
      businesses : props.businesses,
      open       : false
    };
  }

  handleInput = (value) => {
    this.setState({
      value,
      disabled: (value === ' ')
    });
  }


  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDeleteAndClose = () => {
    this.setState({ open: false });
    this.props.deleteBusinessAccount();
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
          title="Delete Business Account"
        />
        <CardText>
          This will delete your business account.
        </CardText>
        <CardText>
          <BusinessSelector items={this.state.businesses} func={this.handleInput} />
        </CardText>
        <CardActions>
          <RaisedButton
            disabled={this.state.disabled}
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
    addCompanyAdmin: state.addCompanyAdmin
  };
}

export default connect(mapStateToProps, {
  deleteBusinessAccount,
})(DeleteBusinessAccount);
