import React, { Component } from 'react';

import BackgroundItem from '../utility/backgroundItem';

export default class Education extends Component {
  renderExpItems() {
    return (
      <ul>
        Education
        {_.map(this.props.edu, (result) => {
          return ([
            <BackgroundItem
            title={result.eduTitle}
            location={result.eduLocation}
            start={result.eduStart}
            end={result.eduEnd}
            />
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
