import React, { Component } from 'react';

import Position from './position';
import VenueType from './venueType';
import JobType from './jobType';

export default class JobTableFilter extends Component {
  render() {
    return (
      <div>
        <Position />
        <VenueType />
        <JobType />
      </div>
    );
  }
}
