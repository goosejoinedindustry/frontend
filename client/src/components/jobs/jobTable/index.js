import React, { Component } from 'react';
import { map } from 'lodash';
import JobTableRow from './jobTableRow';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const data = [
  {
    id: 1,
    time: 5,
    photo: 'https://cdn.filepicker.io/api/file/lzbnvGVsTtmImRQJC8at',
    business: 'Gangilone Bros',
    position: 'Shift Leader/Sandwich Cook',
    jobType: 'Full Time',
    location: 'San Diego, CA',
    applicant: 0,
  },
  {
    id: 2,
    time: 15,
    photo: 'https://cdn.filepicker.io/api/file/C4FWvreRiOk6mhRmkzv3',
    business: 'The Grass Skirt',
    position: 'Security',
    jobType: 'Part Time',
    location: 'Encinitas, CA',
    applicant: 0,
  }
]
export default class JobTable extends Component {
  renderTableData() {
    return (
      <div>
        <MuiThemeProvider>
          <Table>
            <TableHeader
              displayRowCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Posted</TableHeaderColumn>
                <TableHeaderColumn>Photo</TableHeaderColumn>
                <TableHeaderColumn>Business</TableHeaderColumn>
                <TableHeaderColumn>Position</TableHeaderColumn>
                <TableHeaderColumn>Job Type</TableHeaderColumn>
                <TableHeaderColumn>Location</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}>
              {map(data, (result) => {
                return <JobTableRow key={result.id} job={result}/>
              })}
            </TableBody>
          </Table>
        </MuiThemeProvider>

      </div>
    )
  }
  render() {
    return (
        // List of Job Rows
      this.renderTableData()
    );
  }
}
