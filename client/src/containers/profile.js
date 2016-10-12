import React, { Component } from 'react';

import Header from '../components/shared/header.js';
import Footer from '../components/shared/footer.js';
import Summary from '../components/profile/summary';
import SocialSideBar from '../components/shared/socialSideBar.js';
import Background from '../components/profile/background';
import Bio from '../components/profile/bio';
import Photos from '../components/profile/photos';
import VideoResume from '../components/profile/videoresume';
import Intercom from '../components/shared/intercom.js';

export default Profile extends Component {
  render() {
    return (
        <Header />
        <Summary />
        <SocialSideBar />
        <Background />
        <Bio />
        <Photos />
        <VideoResume />
        <Intercom />
        <Footer />
    )
  }
}
