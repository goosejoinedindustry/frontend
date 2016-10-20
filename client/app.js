import React, { Component } from 'react';
import Header from './src/components/shared/header';
import Footer from './src/components/shared/footer';
import Sidebar from './src/components/shared/sidebar';

const exportClass = (View) => {
  return class ViewClass extends Component {
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
