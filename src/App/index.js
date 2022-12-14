import React, { Component, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {ReactNotifications}  from 'react-notifications-component';
import "../../node_modules/font-awesome/scss/font-awesome.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";

import Loader from "./components/Loader/index";
import Aux from "../hoc/_Aux";
import ScrollToTop from "./layout/ScrollToTop";

const AdminLayout = Loadable({
  loader: () => import("./layout/AdminLayout"),
  loading: Loader,
});

class App extends Component {

  state = {
    loadingPage: false,
  }
  componentDidMount() {
    this.state.loadingPage = false;
  }

  render() {

    if (this.state.loadingPage) {
      return <Loader></Loader>
    }

    return (
      <Aux>
        <ScrollToTop>
          <ReactNotifications />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/" component={AdminLayout} />
            </Switch>
          </Suspense>
        </ScrollToTop>
      </Aux>
    );
  }
}

App.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(props) {
  return {
    user: props.user,
  };
}

export default withRouter(connect(mapStateToProps)(App));
