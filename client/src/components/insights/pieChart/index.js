import React, { Component } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import { Card } from 'material-ui';

export default class PieChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name    : props.name || 'pieChart', // Name of chart for legend display
      data    : props.data, // Data in chart
      height  : props.height || 100, //  height for chart
      barSize : props.barSize || 10  // Charts bar sizes
    };
  }

  renderLegend() {
      // TODO: make a better custom legend
    return (
      <div>
        {` ${this.state.data[0].value}`}
        {this.state.name}
      </div>
      );
  }

  render() {
    return (
      <Card label={this.state.name}>
        <div
          style={{
            height   : this.state.height,
            minWidth : this.state.height
          }}
        >
          <ResponsiveContainer>
            <RadialBarChart
              barSize={this.state.barSize}
              data={this.state.data}
              barGap={0}
              barCategoryGap="0%"
            >
              <RadialBar
                clockWise
                dataKey="value"
                minAngle={360}
                fill="#F6931D"
                startAngle={270}
                endAngle={630}
              />
              <Legend
                content={this.renderLegend.bind(this)}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    );
  }
}
