import React, { Component } from 'react';
import { MenuItem, SelectField } from 'material-ui';

export default class UserSelector extends Component {

  constructor(props) {
    super(props);

    const filler = props.items || [];
    this.state = {
      value : ' ',
      func  : props.func,
      items : filler.map((user, idx) => {
        return (
          <MenuItem key={idx} value={user} primaryText={user} />
        );
      })
    };
  }

  handleChange(event, index, value) {
    this.setState({ value });
    this.state.func(value);
  }

  render() {
    return (
      <SelectField
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        floatingLabelText="User Name"
      >
        {this.state.items}
      </SelectField>
    );
  }
}
