import React, { Component } from 'react';

import Header from '../components/shared/header.js';
import Footer from '../components/shared/footer.js';

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
