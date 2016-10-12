import React, { Component } from 'react';

import Header from '../components/shared/header.js';
import Footer from '../components/shared/footer.js';
import ViewGraph from '../components/insights/viewGraph.js';
import ViewStats from '../components/insights/viewStats.js';
import ViewProfiles from '../components/insights/ViewProfiles.js';

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
