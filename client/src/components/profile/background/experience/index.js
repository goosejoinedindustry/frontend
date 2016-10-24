import React, { Component } from 'react';
import { map } from 'lodash';
import { Paper } from 'material-ui';

export default class Experience extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: props.data || []
    };
  }

  render() {
    return (
      <Paper
        zDepth={0}
      >
        {map(this.state.data, (exp) => {
          return ([
            <div>
              <h3>{exp.workTitle} | {exp.company}</h3>
              <p>{exp.startDate} - {exp.endDate}</p>
            </div>
          ]);
        })}
      </Paper>
    );
  }
}
