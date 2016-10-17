import React, { Component } from 'react';

import CountPie from './countPie';
import PercentPie from './percentPie';

export default class ViewStats extends Component {
  render() {
    return (
      <div>
        <h4> Stats </h4>
        <CountPie />
        <h2> Views This Week </h2>
        <CountPie />
        <h2> Views This Month </h2>
        <PercentPie />
        <h2> Applications Viewed </h2>
      </div>
    );
  }
}
