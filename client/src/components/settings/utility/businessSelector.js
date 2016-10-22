import React, { Component } from 'react';
import { MenuItem, SelectField } from 'material-ui';

export default class BusinessSelector extends Component {

  constructor(props) {
    super(props);

    const filler = props.items || [];

    this.state = {
      value : ' ',
      func  : props.func,
      items : filler.map((bus, idx) => {
        return (
          <MenuItem key={idx} value={bus} primaryText={bus} />
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
        floatingLabelText="Business Name"
      >
        {this.state.items}
      </SelectField>
    );
  }
}
