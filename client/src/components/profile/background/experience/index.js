import React, { Component } from 'react';
import { map } from 'lodash';
export default class Experience extends Component {
  renderExpItems() {
    return (
      <div>
        <h3>Experience</h3>
        <ul>
        {map(this.props.exp, (result) => {
          return ([
            <li>
            <h3>{result.expTitle}</h3>
            <div>
            <p>{result.expLocation}</p>
            <p>{result.expStart} - {result.expEnd}</p>
            </div>
            </li>
          ]);
        })}
        </ul>
      </div>
    );
  }
  render() {
    console.log(this.props.exp, 'eduuuu');
    return (
      // going to be a list
      this.renderExpItems()
    );
  }
}
