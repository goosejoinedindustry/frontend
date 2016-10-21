import React, { Component } from 'react';

import TodayShout from '../components/shared/todayShout';
import ApplicationTable from '../components/applications/applicationTable';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <TodayShout />
        <ApplicationTable />
      </div>
    );
  }
}
