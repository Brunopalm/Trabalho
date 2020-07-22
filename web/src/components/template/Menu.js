import React, { Component } from "react";
import "./css/Menu.css";
import { connect } from "react-redux";
import { isVisibleMenuAction } from "actions";

class Menu extends Component {
  render() {
    return (
      <div
        className={this.props.isVisibleMenu ? "Menu show" : "collapse Menu"}
        id="menu"
      >
        <div
          onClick={() => this.props.isVisibleMenuAction(false)}
          className="no-content-menu"
        ></div>
        <div className="content-menu">{this.props.BarraNavegacao}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { isVisibleMenu: state.isVisibleMenuReducer };
};
const mapDispatcherstoProps = (dispatch) => {
  return {
    isVisibleMenuAction: (isVisibleMenu) =>
      dispatch(isVisibleMenuAction(isVisibleMenu)),
  };
};
export default connect(mapStateToProps, mapDispatcherstoProps)(Menu);
