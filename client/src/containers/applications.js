import React, { Component } from 'react';

import Header from '../components/shared/header';
import Footer from '../components/shared/footer';
import TodayShout from '../components/shared/todayShout';
import ApplicationTable from '../components/applications/applicationTable';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <TodayShout />
        <ApplicationTable />
        <Footer />
      </div>
    );
  }
}
