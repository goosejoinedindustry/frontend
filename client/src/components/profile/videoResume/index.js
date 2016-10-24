import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'material-ui';

export default class VideoResume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoResume: props.data
    };
  }

  render() {
    return (
      <Card>
        <CardTitle subtitle="VIDEO RESUME" />
        <CardText>
          {this.state.videoResume}
        </CardText>
      </Card>
    );
  }
}
