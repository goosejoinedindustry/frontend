import React, { Component } from 'react';

export default DeleteBusinessAccount extends Component {
  render() {
    return (
        <div>
            <h4> Delete Business Account </h4>
            <p> This will delete your business account. </p>
            <BusinessSelector />
            <DeleteButton />
        </div>
    )
  }
}
