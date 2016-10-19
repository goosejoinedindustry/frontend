import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
const styles = {
  customWidth: {
    width: 150,
  },
};
export default class JobTableFilter extends Component {
  constructor(props) {
    super(props);
  }
  handleChange(event, index, value) {
    // call the fetch job actions with params
    console.log(value)
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <SelectField style={styles.customWidth} value={'Position'} onChange={this.handleChange.bind(this)}>
            <MenuItem disabled value={'Position'} primaryText='Position' />
            <TextField
              hintText="Search for a Position"
            />
          </SelectField>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <SelectField style={styles.customWidth} value={'Venue Type'} onChange={this.handleChange.bind(this)}>
            <MenuItem disabled value={'Venue Type'} primaryText='Venue Type' />
            <MenuItem value={'Bakery'} primaryText='Bakery' />
            <MenuItem value={'Bar'} primaryText='Bar' />
            <MenuItem value={'Brewery'} primaryText='Brewery' />
            <MenuItem value={'Cafe'} primaryText='Cafe' />
            <MenuItem value={'Casino'} primaryText='Casino' />
          </SelectField>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <SelectField style={styles.customWidth} value={'Job Type'} onChange={this.handleChange.bind(this)}>
            <MenuItem disabled value={'Job Type'} primaryText='Job Type' />
            <MenuItem value={'Full Time'} primaryText='Full Time' />
            <MenuItem value={'Part Time'} primaryText='Part Time' />
            <MenuItem value={'Event'} primaryText='Event' />
            <MenuItem value={'On Call'} primaryText='On Call' />
          </SelectField>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <SelectField style={styles.customWidth} value={'City'} onChange={this.handleChange.bind(this)}>
            <MenuItem disabled value={'City'} primaryText='City' />
            <MenuItem value={'Full Time'} primaryText='Full Time' />
            <MenuItem value={'Part Time'} primaryText='Part Time' />
            <MenuItem value={'Event'} primaryText='Event' />
            <MenuItem value={'On Call'} primaryText='On Call' />
          </SelectField>
        </MuiThemeProvider>
      </div>
    );
  }
}

/*
<MuiThemeProvider>
  <SelectField value={'Venue Type'} onChange={this.handleChange.bind(this)}>
    <MenuItem disabled value={'Venue Type'} primaryText='Venue Type' />
    <MenuItem value={'Bakery'} primaryText='Bakery' />
    <MenuItem value={'Bar'} primaryText='Bar' />
    <MenuItem value={'Brewery'} primaryText='Brewery' />
    <MenuItem value={'Cafe'} primaryText='Cafe' />
    <MenuItem value={'Casino'} primaryText='Casino' />
  </SelectField>
</MuiThemeProvider>
<MuiThemeProvider>
  <SelectField value={'Job Type'} onChange={this.handleChange.bind(this)}>
    <MenuItem disabled value={'Job Type'} primaryText='Job Type' />
    <MenuItem value={'Full Time'} primaryText='Full Time' />
    <MenuItem value={'Part Time'} primaryText='Part Time' />
    <MenuItem value={'Event'} primaryText='Event' />
    <MenuItem value={'On Call'} primaryText='On Call' />
  </SelectField>
</MuiThemeProvider>
*/
