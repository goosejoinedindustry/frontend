import React, { Component } from 'react';
import { map } from 'lodash';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import JobTableRow from './jobTableRow';
injectTapEventPlugin();

export default class JobTable extends Component {
  componentWillMount() {
    this.props.getJobs();
  }
  render() {
    if (!this.props.data) {
      return <div />;
    }
    return (
      <MuiThemeProvider>
        <Table selectable>
          <TableHeader
            displaySelectAll={false}
            displayRowCheckbox={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>Posted</TableHeaderColumn>
              <TableHeaderColumn>Photo</TableHeaderColumn>
              <TableHeaderColumn>Business</TableHeaderColumn>
              <TableHeaderColumn>Position</TableHeaderColumn>
              <TableHeaderColumn>Job Type</TableHeaderColumn>
              <TableHeaderColumn>Location</TableHeaderColumn>
              <TableHeaderColumn />
              <TableHeaderColumn />
            </TableRow>
          </TableHeader>
          <TableBody>
            {map(this.props.data.jobsList, result => <JobTableRow key={result.id} job={result} />)}
          </TableBody>
        </Table>
      </MuiThemeProvider>
    );
  }
}
