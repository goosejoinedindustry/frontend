import React, { Component } from 'react';
import EditButton from '../utility/editButton';

const user = {
  name     : 'Justin Nguyen',
  imageURL : 'https://static.pexels.com/photos/2152/sky-earth-space-working-large.jpg',
  title    : 'Sous Chef',
  employed : 'Waffle House',
  city     : 'San Diego',
  state    : 'CA',
  uri      : 'justintime225'
};
export default class Bio extends Component {
  render() {
    return (
      <div>
        <EditButton />
        <div>
          <img src={user.imageURL} height="100" width="100" />
        </div>
        <h3>{user.name} </h3>
        <h5>{user.title} at {user.employed} in {user.city}, {user.state}</h5>
      </div>
    );
  }
}
