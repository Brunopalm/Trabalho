import React from "react";
import { Menu, BarraNavegacao } from "../../../../components/navbar";
import Gravatar from "react-gravatar";
import imgLogo from "../../../../IMGs/cccomputacao.svg";
import $ from "jquery";

export function actionOnResize() {
  $(window).on("load resize", function () {
    if (window.innerWidth > 990) {
      $("li").addClass("show");
    } else {
      $("li").removeClass("show");
    }
  });
}

export function logout() {
  localStorage.removeItem("__teste");
}

export function emailAleatorio() {
  const number = Math.random();
  return `${number}@exemple.com`;
}

export function userDropdown(isAuthAction) {
  return (
    <div className="user-dropdown hidden">
      <div className="user-button">
        <span className="d-block d-sm-none">Carlos</span>
        <div className="user-dropdown-img">
          <Gravatar email={emailAleatorio()} size={25} />
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
          onClick={() => isAuthAction(false) && logout()}
        >
          <i className="fa fa-sign-out"></i> Sair
        </a>
      </div>
    </div>
  );
}

export function navbar({
  isAuth,
  isVisibleMenuAction,
  isVisibleMenu,
  isAuthAction,
}) {
  return (
    <div>
      <div
        className="navbar"
        id="home"
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
            {isAuth ? (
              <BarraNavegacao text="Editar" path="_admin" />
            ) : (
              <BarraNavegacao />
            )}
          </div>
        </div>
        {isAuth ? userDropdown(isAuthAction) : null}
      </div>

      <Menu
        BarraNavegacao={
          isAuth ? (
            <BarraNavegacao path="_admin" text="Editar" />
          ) : (
            <BarraNavegacao />
          )
        }
      />
    </div>
  );
}
