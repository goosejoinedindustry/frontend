import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'material-ui';

export default class Bio extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bio: props.data
    };
  }
  render() {
    return (
      <Card>
        <CardTitle subtitle="BIO" />
        <CardText>
          {this.state.bio}
        </CardText>
      </Card>
    );
  }
}
