import React, { Component } from 'react';
import _ from 'lodash';
// import BackgroundItem from '../utility/backgroundItem';

export default class Experience extends Component {
  renderExpItems() {
    return (
      <ul>
        Experience
        {_.map(this.props.exp, (result) => {
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
