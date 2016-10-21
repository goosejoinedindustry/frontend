import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Popover, PopoverAnimationVertical } from 'material-ui/Popover';
import AutoComplete from 'material-ui/AutoComplete';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open       : false,
      dataSource : []
    };
  }
  handleTouchTap(event) {
    this.setState({
      open     : true,
      anchorEl : event.currentTarget
    });
  }
  handleRequestClose() {
    this.setState({ open: false });
  }
  handleUpdateInput(obj, item) {
    this.setState({ open: false });
    // console.log(item.props.value);
    console.log(obj, item.props.value);
    this.props.updateFilter('city', item.props.value);
  }
  handleInputSubmit(a, b) {
    console.log(a);
    this.setState({ open: false });
    this.props.updateFilter('city', a);
  }
  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap.bind(this)}
          label="City"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose.bind(this)}
          animation={PopoverAnimationVertical}
        >
          <AutoComplete
            hintText="Search For a City"
            dataSource={this.state.dataSource}
            onNewRequest={this.handleInputSubmit.bind(this)}
          />
          <div>Popular Locations:</div>
          <Menu onItemTouchTap={this.handleUpdateInput.bind(this)}>
            <MenuItem value="Austin" primaryText="Austin" />
            <MenuItem value="Los Angeles" primaryText="Los Angeles" />
            <MenuItem value="Las Vegas" primaryText="Las Vegas" />
            <MenuItem value="San Diego" primaryText="San Diego" />
            <MenuItem value="Santa Monica" primaryText="Santa Monica" />
            <MenuItem value="Seatle" primaryText="Seatle" />
          </Menu>
        </Popover>
      </div>
    );
  }
}
