import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Header, Footer, Content } from "../components";
import { isAuthAction } from "../actions";
import { baseApiUrl, axios } from "../config";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  async validateToken() {
    const json = localStorage.getItem("__teste");
    const userData = JSON.parse(json);

    if (!userData) {
      return false;
    }

    const res = await axios.post(`${baseApiUrl}/validateToken`, userData);

    if (res.data) {
      return true;
    } else {
      localStorage.removeItem("__teste");
      return false;
    }
  }
  render() {
    this.validateToken().then((res) => this.props.isAuthAction(res));
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Content />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isAuth: state.isAuthReducer };
};
const mapDispatcherstoProps = (dispatch) => {
  return {
    isAuthAction: (isAuth) => dispatch(isAuthAction(isAuth)),
  };
};
const connectedApp = connect(mapStateToProps, mapDispatcherstoProps)(App);
export { connectedApp as App };
