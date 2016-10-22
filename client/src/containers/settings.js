import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResetPassword from '../components/settings/resetPassword';
import DeleteAccount from '../components/settings/deleteAccount';
import AddCompanyAdmin from '../components/settings/addCompanyAdmin';
import DeleteBusinessAccount from '../components/settings/deleteBusinessAccount';

// ACTIONS
import { settingDataPull } from '../components/settings/settingAction';

class Settings extends Component {

  constructor(props) {
    super(props);
    this.props.settingDataPull();
  }

  renderComp = (Comp) => {
    if (this.props.settingData.businesses && this.props.settingData.businesses.length) {
      return (Comp);
    }
    return undefined;
  }


  render() {
    return (
      <div>
        <ResetPassword />
        <DeleteAccount />
        {this.renderComp(<AddCompanyAdmin businesses={this.props.settingData.businesses} />)}
        {this.renderComp(<DeleteBusinessAccount businesses={this.props.settingData.businesses} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    settingData: state.settingsReducer
  };
}
export default connect(mapStateToProps, {
  settingDataPull
})(Settings);
