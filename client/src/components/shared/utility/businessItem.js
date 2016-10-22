import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MenuItem } from 'material-ui';
import CustomeMenuItem from './menuItem';
import { sideBarToggle } from '../sharedAction/sidebar';

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

  handleSidebarClick() {
    this.setState({
      toggle: false
    });
    this.props.sideBarToggle({
      toggle: false
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
            click={this.handleSidebarClick.bind(this)}
          />
          <CustomeMenuItem
            name={' View Listings'}
            icon={'fa fa-fw fa-paperclip'}
            route={`/${this.state.screenName}/listings`}
            click={this.handleSidebarClick.bind(this)}
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
function mapStateToProps(state) {
  return {
    toggle: state.sideBarToggle.toggle
  };
}

export default connect(mapStateToProps, {
  sideBarToggle
})(BusinessItem);
