import React, { Component } from 'react';
import { connect } from 'react-redux';
// COMPONENTS
import TodayShout from '../components/shared/todayShout';
import ApplicationTable from '../components/applications/applicationTable';

// ACTIONS
import { fetchApps } from '../components/applications/appAction';

class Profile extends Component {
  render() {
    return (
      <div>
        <TodayShout />
        <ApplicationTable data={this.props.apps} fetchApps={this.props.fetchApps} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    apps: state.appsListing
  };
}
export default connect(mapStateToProps, {
  fetchApps
})(Profile);
