import React, { Component } from 'react';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default class ViewGraph extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: props.data
    };
  }

  render() {
    return (
      <div>
        <AreaChart
          width={600}
          height={400}
          data={this.state.data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="views" stroke="#F6931D" fill="#F6931D" fillOpacity={0.3} />
        </AreaChart>
      </div>
    );
  }
}
