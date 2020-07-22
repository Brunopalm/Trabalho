import "./css/Header.css";
import React, { Component } from "react";
import { Navbar } from "../../components";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar />
      </div>
    );
  }
}

export { Header };
