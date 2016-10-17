import React, { Component } from 'react';
import _ from 'lodash';
import BackgroundItem from '../utility/backgroundItem';

export default class Experience extends Component {
  renderExpItems() {
    return (
      <ul>
        Experience
        {_.map(this.props.exp, (result) => {
          return ([
            <BackgroundItem
            title={result.expTitle}
            location={result.expLocation}
            start={result.expStart}
            end={result.expEnd}
            />
          ])
        })}
      </ul>
    )
  }
  render() {
    console.log(this.props.exp, 'eduuuu');
    return (
      // going to be a list
      this.renderExpItems()
    );
  }
}
