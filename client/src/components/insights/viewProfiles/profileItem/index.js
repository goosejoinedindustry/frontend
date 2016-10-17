import React, { Component } from 'react';

import ViewButton from './viewButton';
import ProfilePreview from './profilePreview';

export default class ProfileItem extends Component {
  render() {
    return (
      <div>
        <ProfilePreview />
        <ViewButton />
      </div>
    );
  }
}
