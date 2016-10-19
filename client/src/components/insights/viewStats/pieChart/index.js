import React, { Component } from 'react';
import { RadialBarChart, RadialBar, Tooltip } from 'recharts';

export default class CountPie extends Component {
  constructor(props) {
    super(props);
    console.log(`constructing${props.name}`);
    this.state = {
      name    : props.name || 'pieChart',
      data    : props.data,
      width   : props.width || 100,
      height  : props.height || 100,
      barSize : props.barSize || 10
    };
  }


  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    console.log(window.document.getElementById(this.props.name).width);
    this.setState({
      height : window.document.getElementById(this.props.name).height,
      width  : window.document.getElementById(this.props.name).width
    });
  }

  render() {
    console.log(`rendering: ${JSON.stringify(this.state)}`);
    // TODO: Cutomize the Tooltip
    return (
      <div
        id={this.state.name}
        style={{ width: '100%', height: '100%' }}
      >
        <RadialBarChart
          width={this.state.width}
          height={this.state.height}
          barSize={this.state.barSize}
          data={this.state.data}
          barGap={0}
          barCategoryGap="0%"
        >
          <RadialBar clockWise dataKey="value" minAngle={360} fill="#F6931D" startAngle={270} endAngle={630} />
          <Tooltip />
        </RadialBarChart>
      </div>
    );
  }
}
