import React, { Component } from 'react';

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
        <Bio />
        <SocialSideBar />
        <Background />
        <Summary />
        <Photos />
        <VideoResume />
        <Intercom />
      </div>
    );
  }
}
