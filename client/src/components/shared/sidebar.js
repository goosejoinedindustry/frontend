import React, { Component } from 'react';
import { Drawer, MenuItem, IconButton } from 'material-ui';
import Chance from 'chance';
import CustomeMenuItem from './utility/menuItem';
import BusinessItem from './utility/businessItem';

const chance = new Chance();

export default class SideBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toggleFunc : props.toggle,
      toggle     : false, // Toggle for drawer item
      businesses : props.businesses || [
          { name: 'bros shacks', screenName: 'broShacks' },
          { name: 'bros shacks2', screenName: 'broShacks2' },
          { name: 'bros shacks3', screenName: 'broShacks3' },
          { name: 'bros shacks4', screenName: 'broShacks4' }
      ], // Bussiness owned by profile
      businessToggle: true
    };
  }
  handleClick() {
    this.setState({
      toggle: !this.state.toggle
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
    if (this.state.businessToggle) {
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
          name={'Create new businesses'}
          icon={'fa fa-fw fa-plus'}
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
        name={'Create new businesses'}
        icon={'fa fa-fw fa-plus'}
      />
    );
  }


  render() {
    const boundClick = this.handleClick.bind(this);
    const renderBusinesses = this.renderBusinesses.bind(this);

    return (
      <section>
        <IconButton touch iconClassName="muidocs-icon-custom-github" onClick={boundClick} />
        <Drawer open={this.state.toggle}>
          <section>
            <div>
                Photo
            </div>
            <div>
                name
            </div>
          </section>
          <CustomeMenuItem
            name={'My Profile'}
            icon={'fa fa-fw fa-user'}
            route={'/'}
          />
          <CustomeMenuItem
            name={'Jobs'}
            icon={'fa fa-fw fa-breifcase'}
            route={'/jobs'}
          />
          <CustomeMenuItem
            name={'My Insights'}
            icon={'fa fa-fw fa-eye'}
            route={'/insights'}
          />
          <CustomeMenuItem
            name={'My Applications'}
            icon={'fa fa-fw fa-paperclip'}
            route={'/applications'}
          />
          {renderBusinesses()}
          <CustomeMenuItem
            name={'Settings'}
            icon={'fa fa-fw fa-gear'}
            route={'/Settings'}
          />
          <CustomeMenuItem
            name={'Invite your Friends'}
            icon={'fa fa-fw fa-envelope-o'}
          />
          <CustomeMenuItem
            name={'Help'}
            icon={'fa fa-fw fa-question-circle'}
            route={'/help'}
          />
          <MenuItem>
            <i className="fa fa-fw fa-sign-out" />
            Logout
          </MenuItem>
        </Drawer>
      </section>
    );
  }
}
