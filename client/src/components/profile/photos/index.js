import React, { Component } from 'react';

import PhotoItem from './utility/photoItem.js';
import EditButton from '../utility/editButton.js';

export default class Photos extends Component {
  render() {
    return (
        // List of photos
        <div>
            <EditButton />
            <PhotoItem />
        </div>
    )
  }
}
