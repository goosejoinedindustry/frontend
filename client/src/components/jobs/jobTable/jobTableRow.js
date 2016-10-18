import React, { Component } from 'react';

import ApplyNowButton from '../utility/applyNowButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class JobTableRow extends Component {
  renderTable() {
    return (
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
    )
  }
  render() {
    return (

      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn></TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
        <TableRowColumn></TableRowColumn>
      </TableRow>
    );
  }
}
