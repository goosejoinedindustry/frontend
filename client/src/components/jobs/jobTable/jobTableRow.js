import React, { Component } from 'react';

import { TableRow, TableRowColumn } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';


export default class JobTableRow extends Component {
  render() {
    const { time, photo, business, position, jobType, location, applicant } = this.props.job;
    return (
      <TableRow hoverable>
        <TableRowColumn>{time} Hours Ago</TableRowColumn>
        <TableRowColumn><img src={photo} height="100" width="100" /></TableRowColumn>
        <TableRowColumn>{business}</TableRowColumn>
        <TableRowColumn>{position}</TableRowColumn>
        <TableRowColumn>{jobType}</TableRowColumn>
        <TableRowColumn>{location}</TableRowColumn>
        <TableRowColumn>{applicant}</TableRowColumn>
        <TableRowColumn>
          <RaisedButton label="Apply" primary />
        </TableRowColumn>
      </TableRow>
    );
  }
}
