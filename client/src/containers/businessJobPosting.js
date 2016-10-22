import React, { Component } from 'react';

import JobListings from '../components/businessJobPosting/jobListings';
import ApplicationTable from '../components/businessJobPosting/applicatesTable';

export default class Jobs extends Component {
  render() {
    return (
      <div>
        <JobListings />
        <ApplicationTable />
      </div>
    );
  }
}
