import React, { Component } from 'react';

import Position from './position';
import VenueType from './venueType';

export default class JobTableFilter extends Component {
  render() {
    return (
      <div>
        <Position />
        <VenueType />
      </div>
    );
  }
}
