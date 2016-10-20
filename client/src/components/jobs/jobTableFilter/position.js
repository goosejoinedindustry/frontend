import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Popover, PopoverAnimationVertical } from 'material-ui/Popover';
import AutoComplete from 'material-ui/AutoComplete';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class Position extends Component {
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
  }
  handleInputSubmit(a, b) {
    console.log(a);
    this.setState({ open: false });
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <RaisedButton
            onTouchTap={this.handleTouchTap.bind(this)}
            label="Position"
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onRequestClose={this.handleRequestClose.bind(this)}
            animation={PopoverAnimationVertical}
          >
            <Menu onItemTouchTap={this.handleUpdateInput.bind(this)}>
              <MenuItem value="FirstOne" primaryText="First" />
              <MenuItem value="SecondOne" primaryText="Second" />
            </Menu>
            <AutoComplete
              hintText="Search for a position"
              dataSource={this.state.dataSource}
              onNewRequest={this.handleInputSubmit.bind(this)}
            />
          </Popover>
        </MuiThemeProvider>
      </div>
    );
  }
}
