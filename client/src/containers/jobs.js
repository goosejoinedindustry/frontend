import React, { Component } from 'react';
import { connect } from 'react-redux';
// COMPONENTS
import Header from '../components/shared/header';
import Footer from '../components/shared/footer';
import JobTable from '../components/jobs/jobTable';
import JobTableFilter from '../components/jobs/jobTableFilter';

// ACTIONS
import { fetchJobs } from '../components/jobs/jobsAction';

class Jobs extends Component {
  getJobs(filterBy) {
    this.props.fetchJobs(filterBy);
  }
  render() {
    return (
      <div>
        <Header />
        <JobTableFilter />
        <JobTable data={this.props.jobs} getJobs={this.getJobs.bind(this)} />
        <Footer />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    jobs: state.jobsListing
  };
}

export default connect(mapStateToProps, {
  fetchJobs
})(Jobs);
