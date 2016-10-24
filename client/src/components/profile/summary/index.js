import React, { Component } from 'react';
import { Card, CardText, Avatar } from 'material-ui';

export default class Summary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photo     : props.data.photo,
      firstName : props.data.firstName,
      lastName  : props.data.lastName,
      username  : `www.industry.co/${props.data.username}`,
      position  : `${props.data.position.workTitle} at ${props.data.position.company}`
    };
  }

  render() {
    return (
      <Card>
        <CardText>
          <Avatar
            src={this.state.photo}
            size={150}
          />
          <p> {this.state.firstName} {this.state.tName} </p>
          <p> {this.state.position} </p>

          <p> {this.state.address} </p>
          <p> {this.state.username} </p>
        </CardText>
      </Card>
    );
  }
}
