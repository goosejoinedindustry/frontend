import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/shared/header';
import Footer from '../components/shared/footer';
import ViewGraph from '../components/insights/viewGraph';
import ViewStats from '../components/insights/viewStats';
import ViewProfiles from '../components/insights/viewProfiles';


// ACTIONS
import { viewGraphData } from '../components/insights/insightAction';

class Insights extends Component {


  componentWillMount() {
    console.log('mounting');
    this.props.viewGraphData();
  }

  render() {
    if (this.props.viewData.statsData) {
      return (
        <div>
          <Header />
          <ViewGraph data={this.props.viewData.graphData} />
          <ViewStats data={this.props.viewData.statsData} />
          <ViewProfiles />
          <Footer />
        </div>
      );
    }

    return (
      <div>
        <Header />
        <div> Loading </div>

        <Footer />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    viewData: state.viewGraphData
  };
}
export default connect(mapStateToProps, {
  viewGraphData
})(Insights);
