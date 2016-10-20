import React, { Component } from 'react';

import Position from './position';
import VenueType from './venueType';
import JobType from './jobType';
import City from './city';

export default class JobTableFilter extends Component {
  render() {
    return (
      <div>
        <Position />
        <VenueType />
        <JobType />
        <City />
      </div>
    );
  }
}
