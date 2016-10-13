import React, { Component } from 'react';

import Header from '../components/shared/header';
import Footer from '../components/shared/footer';
import Summary from '../components/profile/summary';
import SocialSideBar from '../components/shared/socialSideBar';
import Background from '../components/profile/background';
import Bio from '../components/profile/bio';
import Photos from '../components/profile/photos';
import VideoResume from '../components/profile/videoResume';
import Intercom from '../components/shared/intercom';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <Summary />
        <SocialSideBar />
        <Background />
        <Bio />
        <Photos />
        <VideoResume />
        <Intercom />
        <Footer />
      </div>
    );
  }
}
