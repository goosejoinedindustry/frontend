import React, { Contianer } from 'react';

import Header from '../components/shared/header';
import Footer from '../components/shared/footer';
import ViewGraph from '../components/insights/viewGraph';
import ViewStats from '../components/insights/viewStats';
import ViewProfiles from '../components/insights/viewProfiles';

export default class Insights extends Contianer {
  render() {
    return (
      <div>
        <Header />
        <ViewGraph />
        <ViewStats />
        <ViewProfiles />
        <Footer />
      </div>
    );
  }
}
