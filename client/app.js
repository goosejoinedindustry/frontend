import React, { Component } from 'react';
import Header from './src/components/shared/header';
import Footer from './src/components/shared/footer';

export default (Container) => {
  return class ViewClass extends Component {

    componentDidMount() {
      window.Intercom('boot', {
        app_id: 'la8r83c9'
      });
    }

    render() {
      return (
        <div className={'container'}>
          <Header />
          {Container}
          <Footer />
        </div>
        );
    }
   };
};
