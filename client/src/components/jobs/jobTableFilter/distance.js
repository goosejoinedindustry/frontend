import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Popover, PopoverAnimationVertical } from 'material-ui/Popover';
import AutoComplete from 'material-ui/AutoComplete';

export default class Distance extends Component {
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
  handleInputSubmit(a, b) {
    console.log(a);
    this.setState({ open: false });
    this.props.updateFilter('distance', a);
  }
  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap.bind(this)}
          label="Distance"
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
            hintText="Distance in Miles"
            dataSource={this.state.dataSource}
            onNewRequest={this.handleInputSubmit.bind(this)}
          />

        </Popover>
      </div>
    );
  }
}
