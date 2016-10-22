import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RaisedButton, Card, CardHeader, CardText, CardActions } from 'material-ui';
import BusinessSelector from '../utility/businessSelector';
import UserSelector from '../utility/userSelector';

import { addCompanyAdmin } from '../settingAction';

class AddCompanyAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled   : true,
      valueBus   : false,
      valueUser  : false,
      businesses : props.businesses
    };
  }

  handleInputBus = (value) => {
    this.setState({
      valueBus : value,
      disabled : !(value && this.state.valueUser)
    });
  }

  handleInputUser = (value) => {
    this.setState({
      valueUser : value,
      disabled  : !(this.state.valueBus && value)
    });
  }

  render() {
    const users = [
      'User A',
      'User B',
      'User C'
    ];
    return (
      <Card>
        <CardHeader
          title="Add Company Admin"
        />
        <CardText>
            Select a business and user to give account access to.
        </CardText>
        <CardText>
          <section>
            <BusinessSelector items={this.state.businesses} func={this.handleInputBus} />
          </section>
          <section>
            <UserSelector items={users} func={this.handleInputUser} />
          </section>
        </CardText>
        <CardActions>
          <RaisedButton
            disabled={this.state.disabled}
            label={'Add'}
            primary
            onTouchTap={this.props.addCompanyAdmin}
          />
        </CardActions>
      </Card>
        );
  }
}


function mapStateToProps(state) {
  return {
    addCompanyAdmin: state.addCompanyAdmin
  };
}

export default connect(mapStateToProps, {
  addCompanyAdmin,
})(AddCompanyAdmin);
