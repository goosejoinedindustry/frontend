import React, { Component } from 'react';
import { MenuItem, Dialog, RaisedButton } from 'material-ui';
import { browserHistory } from 'react-router';

class menuItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      click   : props.click,
      name    : props.name,
      icon    : props.icon,
      route   : props.route,
      open    : false,
      modal   : props.modal,
      confirm : props.confirm || 'Confirm'
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  handleClickReRoute() {
    browserHistory.push(this.state.route);
  }

  render() {
    const actions = [
      <RaisedButton
        label="Cancel"
        primary
        onTouchTap={this.handleClose}
      />,
      <RaisedButton
        label={this.state.confirm}
        primary
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <section onClick={this.state.click}>
        <MenuItem onClick={this.state.route ? this.handleClickReRoute.bind(this) : this.handleOpen}>
          <i className={`fa fa-${this.state.icon}`} aria-hidden="true" />
          {this.state.name}
        </MenuItem>
        <Dialog
          title={this.state.name}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {this.state.modal}
        </Dialog>
      </section>
    );
  }
}

export default menuItem;
