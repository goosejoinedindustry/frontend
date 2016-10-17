import React, { Component } from 'react';

import Experience from './experience';
import Education from './education';
import EditButton from '../utility/editButton';

const fakeExperience = [
  {
    expTitle: 'Hostess',
    expLocation: 'El Camino',
    expStart: 'Sep 2016', // date format
    expEnd: 'Present' // date format
  },
  {
    expTitle: 'Server, Food Runner, Hostess',
    expLocation: 'Hyatt Regency Mission Bay Spa and Marina',
    expStart: 'Jun 2011', // date format
    expEnd: 'Sep 2013' // date format
  },
];
const fakeEducation = [
  {
    eduTitle: 'Sociology',
    eduLocation: 'UC Davis',
    eduDegree: 'Bachelor Degree',
    eduStart: 'Sep 2013', // date format
    eduEnd: 'June 2015' // date format
  },
  {
    eduTitle: 'Biology',
    eduLocation: 'New Mexico Highlands University',
    eduDegree: 'Other',
    eduStart: 'Aug 2011', // date format
    eduEnd: 'June 2013' // date format
  },
];

export default class Background extends Component {
  render() {
    return (
      <div>
        <EditButton />
        <Experience exp={fakeExperience} />
            ---------
        <Education edu={fakeEducation} />
      </div>
    );
  }
}
