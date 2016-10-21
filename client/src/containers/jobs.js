import React, { Component } from 'react';
import { connect } from 'react-redux';
// COMPONENTS
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
        <JobTableFilter />
        <JobTable data={this.props.jobs} getJobs={this.getJobs.bind(this)} />
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
