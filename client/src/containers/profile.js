import React, { Component } from 'react';
import { connect } from 'react-redux';

import Summary from '../components/profile/summary';
import SocialSideBar from '../components/shared/socialSideBar';
import Background from '../components/profile/background';
import Bio from '../components/profile/bio';
import Photos from '../components/profile/photos';
import VideoResume from '../components/profile/videoResume';
import Intercom from '../components/shared/intercom';
import { getProfileData } from '../components/profile/profileAction';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLocation: this.props.location.pathname
    };

    // Determins what position was the most recent
    function getMostRecent(array) {
      let max;
      for (let i = 0; i < array.length; i += 1) {
        if (max) {
          const curDateData = array[i].endDate.split('-');
          const maxDateData = max.endDate.split('-');
          const date = new Date(curDateData[1], curDateData[0]);
          const maxDate = new Date(maxDateData[1], maxDateData[0]);
          if (date > maxDate) {
            max = array[i];
          }
        } else {
          max = array[i];
        }
      }
      return max;
    }

    // Populates Profile Data from Database
    this.props.getProfileData({
      accessPoint: this.state.currentLocation
    }).then(() => {
      const profile = this.props.profileData.profile.data;
      const photos = this.props.profileData.photos.data;
      this.setState({
        bio        : profile.bio,
        education  : [].concat(profile.educations),
        experience : [].concat(profile.experiences),
        summary    : {
          firstName : profile.firstName,
          lastName  : profile.lastName,
          address   : profile.address,
          photo     : profile.profilePhoto,
          username  : profile.username,
          position  : getMostRecent(profile.experiences)
        },
        photos,
        videoResume: profile.resume
      });
    });
  }

  renderIf = (check, Comp, data) => {
    if (check) {
      return <Comp data={data || check} />;
    }
    return undefined;
  }

  render() {
    return (
      <div>
        {this.renderIf(this.state.bio, Bio)}
        <SocialSideBar />
        {this.renderIf(this.state.education && this.state.experience, Background, { education: this.state.education, experience: this.state.experience })}
        {this.renderIf(this.state.summary, Summary)}
        {this.renderIf(this.state.photos, Photos)}
        {this.renderIf(this.state.videoResume, VideoResume)}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    profileData: state.profileReducer
  };
}
export default connect(mapStateToProps, {
  getProfileData
})(Profile);
