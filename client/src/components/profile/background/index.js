import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'material-ui';

import Experience from './experience';
import Education from './education';

export default class Background extends Component {

  constructor(props) {
    super(props);
    this.state = {
      education  : props.data.education,
      experience : props.data.experience
    };
  }

  render() {
    return (
      <Card>
        <CardTitle subtitle="Experience" />
        <CardText>
          <Experience data={this.state.experience} />
        </CardText>
        <CardTitle subtitle="Education" />
        <CardText>
          <Education data={this.state.education} />
        </CardText>
      </Card>
    );
  }
}
