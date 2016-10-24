import React, { Component } from 'react';
import { map } from 'lodash';
import { Paper } from 'material-ui';

export default class Education extends Component {

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
        {map(this.state.data, (edu) => {
          return ([
            <div>
              <h3>{edu.course} </h3>
              <p>{edu.school}</p>
              <p>{edu.level}</p>
              <p>{edu.startDate} - {edu.endDate}</p>
            </div>
          ]);
        })}
      </Paper>
    );
  }
}
