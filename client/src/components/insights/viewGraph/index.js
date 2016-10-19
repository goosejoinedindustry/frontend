import React, { Component } from 'react';
import { AreaChart, ResponsiveContainer, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default class ViewGraph extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name   : props.name || 'barChart', // Name of chart for legend display
      data   : props.data, // Data in chart
      height : props.min_height || 100, //  height for chart
    };
  }


  render() {
    return (
      <div
        style={{ height: this.state.height }}
      >
        <ResponsiveContainer>
          <AreaChart
            data={this.state.data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="views" stroke="#F6931D" fill="#F6931D" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
