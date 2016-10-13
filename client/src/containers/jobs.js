import React, { Component } from 'react';

import Header from '../components/shared/header';
import Footer from '../components/shared/footer';
import JobTable from '../components/jobs/jobTable';
import JobTableFilter from '../components/jobs/jobTableFilter';

export default class Jobs extends Component {
  render() {
    return (
      <div>
        <Header />
        <JobTableFilter />
        <JobTable />
        <Footer />

      </div>
    );
  }
}
