import React, { Component } from 'react';

import CountPie from './countPie';
import PercentPie from './percentPie';

export default ViewStats extends Component {
  render() {
    return (
        <h4> Stats </h4>
        <CountPie />
        <h2> Views This Week </h2>
        <CountPie />
        <h2> Views This Month </h2>
        <PercentPie />
        <h2> Applications Viewed </h2>
    )
  }
}
