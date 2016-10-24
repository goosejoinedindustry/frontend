import React, { Component } from 'react';
import { Card, CardTitle, CardText, Avatar } from 'material-ui';

export default class Photos extends Component {


  constructor(props) {
    super(props);

    this.state = {
      photos: props.data
    };
  }

  renderPhotos() {
    const photos = [];

    this.state.photos.forEach((photo) => {
      photos.push((
        <CardText key={photo.photoId} > {photo.photoId} </CardText>
        ));
    });
    return photos;
  }

  render() {
    return (
        // List of photos
      <Card>
        <CardTitle subtitle="PHOTOS" />
        {this.renderPhotos.bind(this)()}
      </Card>
    );
  }
}
