import React, { Component } from 'react';

import Experience from './experience';
import Education from './education';
import EditButton from '../utility/editButton';

export default class Background extends Component {
  render() {
    return (
      <div>
        <EditButton />
        <Experience />
        <Education />
      </div>
    );
  }
}
