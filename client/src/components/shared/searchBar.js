import React, { Component } from 'react';
import { TextField, Paper } from 'material-ui';

export default class Header extends Component {

  constructor(props) {
    super(props);
    const NOP = function nop() { console.log('Nopping'); };

    this.state = {
      hint  : props.hint || 'Search Industry',
      func  : props.func || NOP,
      click : props.click
    };
  }

  handleChange(event, value) {
    this.setState({ value });
    this.state.func(value);
  }

  render() {
    return (
      <Paper
        onClick={this.state.click}
        zDepth={0}
      >
        <TextField
          hintText={this.state.hint}
          onChange={this.handleChange.bind(this)}
        />
      </Paper>
    );
  }
}
