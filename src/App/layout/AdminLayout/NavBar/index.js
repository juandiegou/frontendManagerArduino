import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Aux from "../../../../hoc/_Aux";
import DEMO from "../../../../store/constant";
import * as actionTypes from "../../../../store/actions";

class NavBar extends Component {
  render() {
   
    let headerClass = [
      "navbar",
      "pcoded-header",
      "navbar-expand-lg",
      this.props.headerBackColor,
    ];
    if (this.props.headerFixedLayout) {
      headerClass = [...headerClass, "headerpos-fixed"];
    }

    let toggleClass = ["mobile-menu"];
 
    if (this.props.collapseMenu) {
    
      toggleClass = [...toggleClass, "on"];
    }

    return (
      <Aux>
        <></>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rtlLayout: state.reducer.rtlLayout,
    headerBackColor: state.reducer.headerBackColor,
    headerFixedLayout: state.reducer.headerFixedLayout,
    collapseMenu: state.reducer.collapseMenu,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleNavigation: () => dispatch({ type: actionTypes.COLLAPSE_MENU }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
