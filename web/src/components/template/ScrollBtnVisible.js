import React, { Component } from "react";
import { isVisibleBtnToTopAction } from "actions";
import { connect } from "react-redux";

class ScroolBtnVisible extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
export default ScroolBtnVisible;
