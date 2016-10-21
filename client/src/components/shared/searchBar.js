import React, { Component } from 'react';
import { TextField, Paper } from 'material-ui';

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      click: props.click
    };
  }

  render() {
    return (
      <Paper
        onClick={this.state.click}
      >
        <TextField
          hintText="Search Industry"
        />
      </Paper>
    );
  }
}
