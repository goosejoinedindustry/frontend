import React, { Component } from 'react';
import { map } from 'lodash';
import JobTableRow from './jobTableRow';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
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
  componentWillMount() {
    this.props.getJobs();
  }
  render() {
    if (!this.props.data) {
      return <div></div>
    }
    return (
      <MuiThemeProvider>
        <Table selectable={true}>
          <TableHeader
            displaySelectAll={false}
            displayRowCheckbox={false}
            adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Posted</TableHeaderColumn>
              <TableHeaderColumn>Photo</TableHeaderColumn>
              <TableHeaderColumn>Business</TableHeaderColumn>
              <TableHeaderColumn>Position</TableHeaderColumn>
              <TableHeaderColumn>Job Type</TableHeaderColumn>
              <TableHeaderColumn>Location</TableHeaderColumn>
              <TableHeaderColumn></TableHeaderColumn>
              <TableHeaderColumn></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            // render each row
            {map(this.props.data.jobsList, (result) => {
              return <JobTableRow key={result.id} job={result}/>
            })}
          </TableBody>
        </Table>
      </MuiThemeProvider>
    );
  }
}
