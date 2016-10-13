import React, { Component } from 'react';

import Header from '../components/shared/header.js';
import Footer from '../components/shared/footer.js';
import ViewGraph from '../components/insights/viewGraph';
import ViewStats from '../components/insights/viewStats';
import ViewProfiles from '../components/insights/ViewProfiles';

export default Insights extends Component {
  render() {
    return (
        <Header />
        <ViewGraph />
        <ViewStats />
        <ViewProfiles />
        <Footer />
    )
  }
}
