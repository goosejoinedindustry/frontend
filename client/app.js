    import React, { Component } from 'react';
    import { connect } from 'react-redux';
    import Header from './src/components/shared/header';
    import Footer from './src/components/shared/footer';
    import { sideBarToggle } from './src/components/shared/sharedAction/sidebar';

    export default (Container) => {
      function mapStateToProps(state) {
        return {
          toggle: state.sideBarToggle.toggle
        };
      }

      return connect(mapStateToProps, {
        sideBarToggle
      })(class ViewClass extends Component {


        constructor(props) {
          super(props);

          this.props.sideBarToggle({
            toggle: false
          });
        }


        componentDidMount() {
          window.Intercom('boot', {
            app_id: 'la8r83c9'
          });
        }


        handleClick() {
          this.props.sideBarToggle({
            toggle: false
          });
        }


        render() {
          return (
            <div className={'container'} >
              <Header />
              {this.props.toggle}
              <section onClick={this.handleClick.bind(this)}>
                {Container}
                <Footer />
              </section>
            </div>
      );
        }
 });
    };
