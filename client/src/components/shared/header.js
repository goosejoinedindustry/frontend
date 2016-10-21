import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar } from 'material-ui';
import SearchBar from './searchBar';
import Sidebar from './sidebar';
import { sideBarToggle } from './sharedAction/sidebar';

class Header extends Component {

  handleClick() {
    this.props.sideBarToggle({
      toggle: false
    });
  }

  render() {
    return (
      <AppBar
        iconElementLeft={<Sidebar />}
        iconElementRight={<SearchBar click={this.handleClick.bind(this)} />}
      />
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
})(Header);
