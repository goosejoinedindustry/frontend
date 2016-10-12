import React, { Component } from 'react';

import Header from '../components/shared/header.js';
import Footer from '../components/shared/footer.js';
import JobTable from '../components/jobs/jobTable.js';
import JobTableFilter from '../components/jobs/jobTableFilter.js';

export default Jobs extends Component {
  render() {
    return (
        <Header />
        <JobTableFilter />
        <JobTable />
        <Footer />
    )
  }
}
