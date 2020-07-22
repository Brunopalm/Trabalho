import React, { Component } from "react";
import { connect } from "react-redux";
import { isVisibleMenuAction } from "../../actions";
import "./css/Menu.css";

class _Menu extends Component {
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
const Menu = connect(mapStateToProps, mapDispatcherstoProps)(_Menu);
export { Menu };
