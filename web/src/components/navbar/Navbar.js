import { Component } from "react";
import { isVisibleMenuAction, isAuthAction } from "../../actions";
import { connect } from "react-redux";
import { navbar } from "./constants";
import "./css/fontawesome/css/all.css";
import "./css/Navbar.css";

class _Navbar extends Component {
  render() {
    const props = this.props;
    return navbar(props);
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuthReducer,
    isVisibleMenu: state.isVisibleMenuReducer,
  };
};

const mapDispatcherstoProps = (dispatch) => {
  return {
    isAuthAction: (isAuth) => dispatch(isAuthAction(isAuth)),
    isVisibleMenuAction: (isVisibleMenu) =>
      dispatch(isVisibleMenuAction(isVisibleMenu)),
  };
};

const Navbar = connect(mapStateToProps, mapDispatcherstoProps)(_Navbar);
export { Navbar };
