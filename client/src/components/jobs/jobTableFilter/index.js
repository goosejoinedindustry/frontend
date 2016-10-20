import React, { Component } from 'react';

import Position from './position';
import VenueType from './venueType';
import JobType from './jobType';
import City from './city';
import Zipcode from './zipcode';
import Distance from './distance';

export default class JobTableFilter extends Component {
  render() {
    return (
      <div>
        <Position />
        <VenueType />
        <JobType />
        <City />
        <Zipcode />
        <Distance />
      </div>
    );
  }
}
