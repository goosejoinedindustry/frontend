import React, { Component } from 'react';
import { Paper } from 'material-ui';

export default class BackgroundItem extends Component {
  static propTypes = {
    title    : React.PropTypes.string,
    location : React.PropTypes.string,
    start    : React.PropTypes.string,
    end      : React.PropTypes.string
  }
  render() {
    return (
      <Paper
        zDepth={0}
      >
      Yo
      </Paper>
    );
  }
}
