import React, { Component } from "react";
import imgLogo from "IMGs/cccomputacao.svg";
import "components/template/css/fontawesome/css/all.css";
import "components/template/css/Navbar.css";
import BarraNavegacao from "components/template/BarraNavegacao";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { isAuthAction, isVisibleMenuAction } from "../../../actions";
import Gravatar from "react-gravatar";
import $ from "jquery";

class NavbarAdmin extends Component {
  logout() {
    localStorage.removeItem("__teste");
  }
  emailAleatorio() {
    const number = Math.random();
    return `${number}@exemple.com`;
  }
  render() {
    const { isAuthAction, isVisibleMenu, isVisibleMenuAction } = this.props;
    return (
      <div
        className="navbar"
        style={{ padding: "0", backgroundColor: "#1d9af2" }}
      >
        <div className="container">
          <div className="navbar-header">
            <img className="navbar-brand img-logo" alt="LOGOCC" src={imgLogo} />
            <button
              className="navbar-toggler"
              onClick={() => isVisibleMenuAction(!isVisibleMenu)}
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse barra-navegacao">
            <BarraNavegacao text="Editar" />
          </div>
        </div>
        <div className="user-dropdown hidden">
          <div className="user-button">
            <span className="d-block d-sm-none">Carlos</span>
            <div className="user-dropdown-img">
              <Gravatar email={this.emailAleatorio()} size={25} />
            </div>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="user-dropdown-content">
            <div>
              <i className="fa fa-cogs"></i> Administração
            </div>
            <a
              href="/"
              className="sair"
              onClick={() => isAuthAction(false) && this.logout()}
            >
              <i className="fa fa-sign-out"></i> Sair
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuthReducer,
    isVisibleMenu: state.isVisibleMenuReducer,
  };
  return { isVisibleMenu: state.isVisibleMenuReducer };
};
const mapDispatcherstoProps = (dispatch) => {
  return {
    isAuthAction: (isAuth) => dispatch(isAuthAction(isAuth)),
    isVisibleMenuAction: (isVisibleMenu) =>
      dispatch(isVisibleMenuAction(isVisibleMenu)),
  };
};
const connectedNavbar = connect(
  mapStateToProps,
  mapDispatcherstoProps
)(NavbarAdmin);
export { connectedNavbar as NavbarAdmin };
