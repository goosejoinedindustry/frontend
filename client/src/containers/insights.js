import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/shared/header';
import Footer from '../components/shared/footer';
import ViewGraph from '../components/insights/viewGraph';
import ViewProfiles from '../components/insights/viewProfiles';
import PieChart from '../components/insights/pieChart';

// ACTIONS
import { viewGraphData } from '../components/insights/insightAction';

class Insights extends Component {


  componentWillMount() {
    this.props.viewGraphData();
  }

  render() {
    if (this.props.viewData.statsData) {
      return (
        <div
          className={'container'}
        >
          <div className={'row'}>
            <div className={'col-xs-12'}>
              <ViewGraph
                data={this.props.viewData.graphData}
              />
            </div>
            <div className={'col-xs-4'}>
              <PieChart
                data={this.props.viewData.statsData.data}
              />
              <PieChart
                data={this.props.viewData.statsData.data2}
              />
              <PieChart
                data={this.props.viewData.statsData.data3}
              />
            </div>
          </div>
          <div className={'row'}>
            <div className={'col-xs-16'}>
              <ViewProfiles />
            </div>
          </div>
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
