import React, { Component } from 'react';
import { MenuItem } from 'material-ui';
import CustomeMenuItem from './menuItem';

class BusinessItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name       : props.name,
      screenName : props.screenName,
      toggle     : false
    };
  }

  handleClick() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  renderBusinessDetails() {
    if (this.state.toggle) {
      return (
        <section>
          <CustomeMenuItem
            name={'View Profile'}
            icon={'fa fa-fw fa-building-o'}
            route={`/${this.state.screenName}`}
          />
          <CustomeMenuItem
            name={' View Listings'}
            icon={'fa fa-fw fa-paperclip'}
            route={`/${this.state.screenName}/listings`}
          />
        </section>
        );
    }
    return (
      <section />
    );
  }

  render() {
    return (
      <section>
        <MenuItem key={this.state.name} onClick={this.handleClick.bind(this)}>
          {this.state.name}
          <i className={this.state.toggle ? 'fa fa-angle-down' : 'fa fa-angle-up'} />
        </MenuItem>
        {this.renderBusinessDetails.bind(this)()}
      </section>
        );
  }
}


export default BusinessItem;
