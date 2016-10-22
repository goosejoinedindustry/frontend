import React, { Component } from 'react';
import { map } from 'lodash';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';
import ApplicationTableRow from './applicationTableRow';

export default class ApplicationTable extends Component {
  componentWillMount() {
    this.props.fetchApps();
  }
  render() {
    console.log(this.props.data, 'apppp data');
    return (
        // List
      <Table selectable>
        <TableHeader
          displaySelectAll={false}
          displayRowCheckbox={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn>Seen</TableHeaderColumn>
            <TableHeaderColumn>Job Status</TableHeaderColumn>
            <TableHeaderColumn>Submitted</TableHeaderColumn>
            <TableHeaderColumn>Photo</TableHeaderColumn>
            <TableHeaderColumn>Business</TableHeaderColumn>
            <TableHeaderColumn>Position</TableHeaderColumn>
            <TableHeaderColumn>Email Updates</TableHeaderColumn>
            <TableHeaderColumn>Text Updates</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {map(this.props.data.appsList, result => <ApplicationTableRow key={result.id} app={result} />)}
        </TableBody>
      </Table>
    );
  }
}
