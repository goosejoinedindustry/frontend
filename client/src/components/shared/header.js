import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import SearchBar from './searchBar';
import Sidebar from './sidebar';


export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sideBarToggle: props.sideBarToggle
    };
  }


  render() {
    return (
      <section>
        <AppBar
          iconElementLeft={<Sidebar toggle={this.state.sideBarToggle} />}
          iconElementRight={<SearchBar />}
        />
      </section>
    );
  }
}
