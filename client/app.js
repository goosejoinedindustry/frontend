import React, { Component } from 'react';
import Header from './src/components/shared/header';
import Footer from './src/components/shared/footer';
import Sidebar from './src/components/shared/sidebar';

const exportClass = (View) => {
  return class ViewClass extends Component {
    componentDidMount() {
      window.Intercom('boot', {
        app_id: 'la8r83c9'
      });
    }

    render() {
      return (
        <div>
          <Header />
          <Sidebar />
          <View />
          <Footer />
        </div>
        );
    }
   };
};

const appView = view => exportClass(view);

export default appView;
