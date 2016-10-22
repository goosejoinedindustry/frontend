import React, { Component } from 'react';

export default class BackgroundItem extends Component {
  static propTypes = {
    title    : React.PropTypes.string,
    location : React.PropTypes.string,
    start    : React.PropTypes.string,
    end      : React.PropTypes.string
  }
  render() {
    return (
      <div />
    );
  }
}
