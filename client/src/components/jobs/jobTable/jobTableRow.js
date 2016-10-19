import React, { Component } from 'react';

import ApplyNowButton from '../utility/applyNowButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class JobTableRow extends Component {
  render() {
    const { time, photo, business, position, jobType, location, applicant } = this.props.job;
    return (
      <TableRow hoverable={true}>
        <TableRowColumn>{time} Hours Ago</TableRowColumn>
        <TableRowColumn><img src={photo} height="100" width="100" /></TableRowColumn>
        <TableRowColumn>{business}</TableRowColumn>
        <TableRowColumn>{position}</TableRowColumn>
        <TableRowColumn>{jobType}</TableRowColumn>
        <TableRowColumn>{location}</TableRowColumn>
        <TableRowColumn>{applicant}</TableRowColumn>
        <TableRowColumn>
          <RaisedButton label="Apply" primary={true} />
        </TableRowColumn>
      </TableRow>
    );
  }
}
