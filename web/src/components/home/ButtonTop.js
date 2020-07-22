import React, { Component } from "react";
import "./css/ButtonTop.css";
import { connect } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";

class _ButtonTop extends Component {
  render() {
    return (
      <Link
        to="#home"
        smooth
        className={"ButtonTop " + this.props.isVisibleBtn}
      ></Link>
    );
  }
}

const mapStateToProps = (state) => {
  return { isVisibleBtn: state.isVisibleBtnToTopReducer };
};
const ButtonTop = connect(mapStateToProps)(_ButtonTop);
export { ButtonTop };
