import React, { Component } from 'react';

import Header from '../components/shared/header.js';
import Footer from '../components/shared/footer.js';
import TodayShout from '../components/shared/todayShout.js';
import ApplicationTable from '../components/applications/applicationTable.js';

export default Profile extends Component {
  render() {
    return (
        <Header />
        <TodayShout />
        <ApplicationTable />
        <Footer />
    )
  }
}
