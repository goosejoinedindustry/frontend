import React, { Component } from 'react';
// import SelectField from 'material-ui/SelectField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import { Popover, PopoverAnimationVertical } from 'material-ui/Popover';
import AutoComplete from 'material-ui/AutoComplete';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
// import TextField from 'material-ui/TextField';
// const styles = {
//   customWidth: {
//     width: 150,
//   },
// };
export default class JobTableFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position   : true,
      dataSource : []
    };
  }
  // handleChange(event, index, value) {
  //   // call the fetch job actions with params
  //   console.log(value);
  // }
  handleTouchTapPosition(event) {
    this.setState({
      position : true,
      anchorEl : event.currentTarget
    });
  }
  handleRequestClose() {
    this.setState({ position: false });
  }
  handleUpdateInput(obj, item) {
    this.setState({ position: false });
    console.log(item.props.value);
  }
  render() {
    return (
      <div>
        <div className="first">
          <MuiThemeProvider>
            <RaisedButton
              onTouchTap={this.handleTouchTapPosition.bind(this)}
              label="Position"
            />
          </MuiThemeProvider>
          <MuiThemeProvider>
            <Popover
              open={this.state.position}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
              onRequestClose={this.handleRequestClose.bind(this)}
            >
              <Menu onItemTouchTap={this.handleUpdateInput.bind(this)}>
                <MenuItem value="FirstOne" primaryText="First" />
                <MenuItem value="SecondOne" primaryText="Second" />
              </Menu>
              <AutoComplete
                hintText="Type anything"
                dataSource={this.state.dataSource}
                onUpdateInput={this.handleUpdateInput}
              />
            </Popover>
          </MuiThemeProvider>
        </div>
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
