import React, { Component } from 'react';

import ViewButton from './viewButton.js';
import ProfilePreview from './profilePreview.js';

export default class ProfileItem extends Component {
  render() {
    return (
      <div>
      <ProfilePreview />
      <ViewButton />
      </div>
    )
  }
}
