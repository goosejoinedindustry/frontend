import React, { Component } from 'react';

import Pie from './pieChart';


export default class ViewStats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data  : props.data.data,
      data2 : props.data.data2,
      data3 : props.data.data3
    };
  }

  render() {
    return (
      <div style={{ width: '100px', height: '100px' }}>
        <Pie
          name={'count by week'}
          data={this.state.data}
        />

      </div>
    );
  }
}
