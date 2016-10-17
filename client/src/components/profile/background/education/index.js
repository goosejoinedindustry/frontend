import React, { Component } from 'react';

import BackgroundItem from '../utility/backgroundItem';

export default class Education extends Component {
  renderExpItems() {
    return (
      <ul>
        Education
        {_.map(this.props.edu, (result) => {
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
    )
  }
  render() {
    return (
      // going to be a list
      this.renderExpItems()
    );
  }
}
