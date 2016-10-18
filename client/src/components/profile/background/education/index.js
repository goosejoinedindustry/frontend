import React, { Component } from 'react';
import { map } from 'lodash';
export default class Education extends Component {
  renderExpItems() {
    return (
      <div>
        <h3>Education</h3>
        <ul>
        {map(this.props.edu, (result) => {
          return ([
            <li>
            <h3>{result.eduTitle}</h3>
            <div>
            <p>{result.eduLocation}</p>
            <p>{result.eduStart} - {result.eduEnd}</p>
            </div>
            </li>
          ])
        })}
        </ul>
      </div>
    )
  }
  render() {
    return (
      // going to be a list
      this.renderExpItems()
    );
  }
}
