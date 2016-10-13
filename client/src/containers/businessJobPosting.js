import React, { Component } from 'react';

import Header from '../components/shared/header';
import Footer from '../components/shared/footer';
import JobListings from '../components/businessJobPosting/jobListings';
import ApplicationTable from '../components/businessJobPosting/applicatesTable';

export default class Jobs extends Component {
  render() {
    return (
      <div>
        <Header />
        <JobListings />
        <ApplicationTable />
        <Footer />
      </div>
    );
  }
}
