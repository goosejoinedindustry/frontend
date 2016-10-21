import React, { Component } from 'react';
import { MenuItem } from 'material-ui';
import { browserHistory } from 'react-router';

class menuItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name  : props.name,
      icon  : props.icon,
      route : props.route
    };
  }

  handleClickReRoute() {
    browserHistory.push(this.state.route);
  }

  handleClickModal() {
    console.log(`Make ${this.state.name} appear`);
  }

  render() {
    return (
      <section>
        <MenuItem onClick={this.state.route ? this.handleClickReRoute.bind(this) : this.handleClickModal.bind(this)}>
          <i className={this.state.icon} />
          {this.state.name}
        </MenuItem>
      </section>
    );
  }
}


export default menuItem;
