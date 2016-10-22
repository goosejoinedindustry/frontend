import React, { Component } from 'react';

import PhotoItem from './utility/photoItem';
import EditButton from '../utility/editButton';

export default class Photos extends Component {
  render() {
    return (
        // List of photos
      <div>
        <EditButton />
        <PhotoItem />
      </div>
    );
  }
}
