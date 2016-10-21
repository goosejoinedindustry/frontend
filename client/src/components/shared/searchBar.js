import React, { Component } from 'react';
import { TextField, Paper } from 'material-ui';

export default class Header extends Component {
  render() {
    return (
      <Paper>
        <TextField
          hintText="Search Industry"
        />
      </Paper>
    );
  }
}
