import React, { Component } from 'react';
import { Drawer, MenuItem, IconButton, Paper, Avatar } from 'material-ui';
import { connect } from 'react-redux';
import Chance from 'chance';
import CustomeMenuItem from './utility/menuItem';
import BusinessItem from './utility/businessItem';
import { sideBarToggle } from './sharedAction/sidebar';
import InviteFriend from './utility/inviteFriends';
import CreateBusiness from './utility/createBusiness';


const chance = new Chance();

class SideBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      businesses: props.businesses || [
          { name: 'bros shacks', screenName: 'broShacks' },
          { name: 'bros shacks2', screenName: 'broShacks2' },
          { name: 'bros shacks3', screenName: 'broShacks3' },
          { name: 'bros shacks4', screenName: 'broShacks4' }
      ], // Bussiness owned by profile
      businessToggle: false
    };
  }
  handleClick() {
    this.props.sideBarToggle({
      toggle: true
    });
    this.setState({
      businessToggle: false
    });
  }

  handleClickRevert() {
    this.props.sideBarToggle({
      toggle: false
    });
    this.setState({
      businessToggle: false
    });
  }

  handleBusinessClick() {
    this.setState({
      businessToggle: !this.state.businessToggle
    });
  }

  renderBusinessItems() {
    return this.state.businesses.map((bus) => {
      return (
        <BusinessItem
          key={chance.android_id()}
          screenName={bus.screenName}
          name={bus.name}
        />
      );
    });
  }

  renderBusinessList() {
    if (!this.state.businessToggle) {
      return (
        <section>
          <MenuItem onClick={this.handleBusinessClick.bind(this)}>
            <i className="fa fa-fw fa-building-o" />
            Mangage Business
          </MenuItem>
        </section>
        );
    }
    return (
      <section>
        <MenuItem onClick={this.handleBusinessClick.bind(this)}>
          <i className="fa fa-fw fa-building-o" />
          Mangage Business
        </MenuItem>
        <CustomeMenuItem
          name={'Create New Businesses'}
          icon={'fa fa-fw fa-plus'}
          modal={<CreateBusiness />}
        />
        {this.renderBusinessItems.bind(this)()}
      </section>
    );
  }

  renderBusinesses() {
    const renderBusinessList = this.renderBusinessList.bind(this);
    if (this.state.businesses) {
      return renderBusinessList();
    }
    return (
      <CustomeMenuItem
        name={'Create New Businesses'}
        icon={'fa fa-fw fa-plus'}
        modal={<CreateBusiness />}
      />
    );
  }

  render() {
    return (
      <section>
        <IconButton touch iconClassName="muidocs-icon-custom-github" onClick={this.handleClick.bind(this)} />
        <Drawer open={this.props.toggle}>
          <section>
            <Paper
              zDepth={0}
            >
              <Avatar
                src="USER_PROFILE_PIC.png"
                size={100}
              />
            </Paper>
            <Paper
              zDepth={0}
            >
                USER_NAME
            </Paper>
          </section>
          <CustomeMenuItem
            name={'My Profile'}
            icon={'user'}
            route={'/'}
            click={this.handleClickRevert.bind(this)}
          />
          <CustomeMenuItem
            name={'Jobs'}
            icon={'fa fa-fw fa-breifcase'}
            route={'/jobs'}
            click={this.handleClickRevert.bind(this)}
          />
          <CustomeMenuItem
            name={'My Insights'}
            icon={'fa fa-fw fa-eye'}
            route={'/insights'}
            click={this.handleClickRevert.bind(this)}
          />
          <CustomeMenuItem
            name={'My Applications'}
            icon={'fa fa-fw fa-paperclip'}
            route={'/applications'}
            click={this.handleClickRevert.bind(this)}
          />
          {this.renderBusinesses.bind(this)()}
          <CustomeMenuItem
            name={'Settings'}
            icon={'fa fa-fw fa-gear'}
            route={'/Settings'}
            click={this.handleClickRevert.bind(this)}
          />
          <CustomeMenuItem
            name={'Invite your Friends'}
            icon={'fa fa-fw fa-envelope-o'}
            modal={<InviteFriend />}
            confirm={'Invite'}
          />
          <CustomeMenuItem
            name={'Help'}
            icon={'fa fa-fw fa-question-circle'}
            route={'/help'}
            click={this.handleClickRevert.bind(this)}
          />
          <MenuItem
            onClick={this.handleClickRevert.bind(this)}
          >
            <i className="fa fa-fw fa-sign-out" />
            Logout
          </MenuItem>
        </Drawer>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    toggle: state.sideBarToggle.toggle
  };
}

export default connect(mapStateToProps, {
  sideBarToggle
})(SideBar);
