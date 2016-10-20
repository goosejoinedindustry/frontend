import React, { Component } from 'react';

import Position from './position';
import VenueType from './venueType';
export default class JobTableFilter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     position   : false,
  //     venueType  : false,
  //     jobType    : false,
  //     city       : false,
  //     zipcode    : false,
  //     distance   : false,
  //     dataSource : []
  //   };
  // }
  // handleTouchTapPosition(event) {
  //   this.setState({
  //     position : true,
  //     anchorEl : event.currentTarget
  //   });
  // }
  // handleRequestClose() {
  //   this.setState({ position: false });
  // }
  // handleUpdateInput(obj, item) {
  //   this.setState({ position: false });
  //   // console.log(item.props.value);
  //   console.log(obj, item.props.value);
  // }
  // handleInputSubmit(a, b) {
  //   console.log(a);
  // }
  render() {
    return (
      <div>
        <Position />
        <VenueType />
      </div>
    );
  }
}

/*
<MuiThemeProvider>
  <SelectField style={styles.customWidth} value={'Venue Type'} onChange={this.handleChange.bind(this)}>
    <MenuItem disabled value={'Venue Type'} primaryText="Venue Type" />
    <MenuItem value={'Bakery'} primaryText="Bakery" />
    <MenuItem value={'Bar'} primaryText="Bar" />
    <MenuItem value={'Brewery'} primaryText="Brewery" />
    <MenuItem value={'Cafe'} primaryText="Cafe" />
    <MenuItem value={'Casino'} primaryText="Casino" />
  </SelectField>
</MuiThemeProvider>
<MuiThemeProvider>
  <SelectField style={styles.customWidth} value={'Job Type'} onChange={this.handleChange.bind(this)}>
    <MenuItem disabled value={'Job Type'} primaryText="Job Type" />
    <MenuItem value={'Full Time'} primaryText="Full Time" />
    <MenuItem value={'Part Time'} primaryText="Part Time" />
    <MenuItem value={'Event'} primaryText="Event" />
    <MenuItem value={'On Call'} primaryText="On Call" />
  </SelectField>
</MuiThemeProvider>
<MuiThemeProvider>
  <SelectField style={styles.customWidth} value={'City'} onChange={this.handleChange.bind(this)}>
    <MenuItem disabled value={'City'} primaryText="City" />
    <MenuItem value={'Full Time'} primaryText="Full Time" />
    <MenuItem value={'Part Time'} primaryText="Part Time" />
    <MenuItem value={'Event'} primaryText="Event" />
    <MenuItem value={'On Call'} primaryText="On Call" />
  </SelectField>
</MuiThemeProvider>
*/
