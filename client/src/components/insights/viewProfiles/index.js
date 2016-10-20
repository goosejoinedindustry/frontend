import React, { Component } from 'react';
import { Card } from 'material-ui';
import ViewProfileItem from './profileItem';

export default class ViewProfiles extends Component {

  render() {
    return (
      <div
        className={'container'}
      >
        <div className={'row'}>
          <div className={' col-md-4 col-lg-4'}>
            <ViewProfileItem />
          </div>
          <div className={' col-md-4 col-lg-4'}>
            <ViewProfileItem />
          </div>
          <div className={' col-md-4 col-lg-4'}>
            <ViewProfileItem />
          </div>
        </div>
      </div>
    );
  }
}
