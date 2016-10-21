import React, { Component } from 'react';
import { map } from 'lodash';

import Position from './position';
import VenueType from './venueType';
import JobType from './jobType';
import City from './city';
import Zipcode from './zipcode';
import Distance from './distance';

const display = ['food', 'stuff'];
const filter = {
  position  : null,
  venueType : null,
  jobType   : null,
  city      : null,
  zipcode   : null,
  distance  : null
};

export default class JobTableFilter extends Component {
  renderFilter() {
    const result = [];
    for (const key in filter) {
      if (filter[key]) {
        result.push(filter[key]);
      }
    }
    return result;
  }
  updateFilter(type, value) {
    filter[type] = value;
    this.props.fetchJobs(filter);
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <div>
          <Position updateFilter={this.updateFilter.bind(this)} />
          <VenueType updateFilter={this.updateFilter.bind(this)} />
          <JobType updateFilter={this.updateFilter.bind(this)} />
          <City updateFilter={this.updateFilter.bind(this)} />
          <Zipcode updateFilter={this.updateFilter.bind(this)} />
          <Distance updateFilter={this.updateFilter.bind(this)} />
        </div>
        {this.renderFilter()}
        <div />
      </div>
    );
  }
}
