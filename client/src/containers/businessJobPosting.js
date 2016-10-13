import React, { Component } from 'react';

import Header from '../components/shared/header.js';
import Footer from '../components/shared/footer.js';
import JobListings from '../components/businessJobPosting/jobListings';
import ApplicationTable from '../components/businessJobPosting/applicatesTable';

export default Jobs extends Component {
  render() {
    return (
        <Header />
        <JobListings />
        <ApplicatesTable />
        <Footer />
    )
  }
}
