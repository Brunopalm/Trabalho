import React, { Component } from "react";
import imgLogo from "../../IMGs/cccomputacao.svg";
import "./css/fontawesome/css/all.css";
import "./css/Navbar.css";
import Menu from "components/template/Menu";
import BarraNavegacao from "./BarraNavegacao";
import { connect } from "react-redux";
import Gravatar from "react-gravatar";
import { isVisibleMenuAction, isAuthAction } from "actions";

class Navbar extends Component {
  userDropdown() {
    return (
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
            onClick={() => this.props.isAuthAction(false) && this.logout()}
          >
            <i className="fa fa-sign-out"></i> Sair
          </a>
        </div>
      </div>
    );
  }
  logout() {
    localStorage.removeItem("__teste");
  }
  emailAleatorio() {
    const number = Math.random();
    return `${number}@exemple.com`;
  }
  render() {
    return (
      <div>
        <div
          className="navbar"
          id="home"
          style={{ padding: "0", backgroundColor: "#1d9af2" }}
        >
          <div className="container">
            <div className="navbar-header">
              <img
                className="navbar-brand img-logo"
                alt="LOGOCC"
                src={imgLogo}
              />
              <button
                className="navbar-toggler"
                onClick={() =>
                  this.props.isVisibleMenuAction(!this.props.isVisibleMenu)
                }
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse barra-navegacao">
              {this.props.isAuth ? (
                <BarraNavegacao text="Editar" />
              ) : (
                <BarraNavegacao />
              )}
            </div>
          </div>
          {this.props.isAuth ? this.userDropdown() : null}
        </div>

        <Menu
          BarraNavegacao={
            this.props.isAuth ? (
              <BarraNavegacao text="Editar" />
            ) : (
              <BarraNavegacao />
            )
          }
        />
      </div>
    );
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
export default connect(mapStateToProps, mapDispatcherstoProps)(Navbar);
