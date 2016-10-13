import React, { Component } from 'react';

import Experience from './experience';
import Education from './education';
import EditButton from '../utility/editButton.js';

export default class Background extends Component {
  render() {
    return (
        <div>
            <EditButton />
            <Experience />
            <Education />
        </div>
    )
  }
}
