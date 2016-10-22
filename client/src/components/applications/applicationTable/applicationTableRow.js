import React, { Component } from 'react';

import { TableRow, TableRowColumn } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

export default class ApplicationTableRow extends Component {
  render() {
    const { seen, jobStatus, submitted, photo, business, position, emailUpdate, textUpdates } = this.props.app;
    return (
      <TableRow hoverable>
        <TableRowColumn>seen</TableRowColumn>
        <TableRowColumn>jobStatus</TableRowColumn>
        <TableRowColumn>{submitted}</TableRowColumn>

        <TableRowColumn><img src={photo} height="100" width="100" /></TableRowColumn>
        <TableRowColumn>{business}</TableRowColumn>
        <TableRowColumn>{position}</TableRowColumn>
        <TableRowColumn>emailUpdate</TableRowColumn>
        <TableRowColumn>textUpdate</TableRowColumn>
      </TableRow>
    );
  }
}
