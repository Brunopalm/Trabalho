import React, { Component } from "react";
import "./css/Content.css";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  ButtonTop,
  People,
  Documents,
  Production,
  Auth,
} from "../../components";
import {
  Documents as DocumentsAdmin,
  People as PeoplesAdmin,
} from "../../components/admin";
import { isVisibleBtnToTopAction } from "../../actions";
import { connect } from "react-redux";

class _Content extends Component {
  componentDidMount() {
    window.addEventListener(
      "scroll",
      (e) => this.props.isVisibleBtnToTopAction(e, "btn-to-top-visible"),
      true
    );
  }
  componentWillUnmount() {
    window.removeEventListener(
      "scroll",
      () => this.props.isVisibleBtnToTopAction,
      true
    );
  }

  render() {
    return (
      <div className="Content">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home ButtonTop={<ButtonTop />} />}
          />
          <Route
            path="/pessoas"
            render={(props) => <People ButtonTop={<ButtonTop />} />}
          />
          <Route
            path="/documentos"
            render={(props) => <Documents ButtonTop={<ButtonTop />} />}
          />
          <Route
            path="/produção"
            render={(props) => <Production ButtonTop={<ButtonTop />} />}
          />
          <Route
            path="/admin"
            render={(props) => <Auth ButtonTop={<ButtonTop />} />}
          />
          <Route
            path="/documentos_admin"
            render={(props) => <DocumentsAdmin ButtonTop={<ButtonTop />} />}
          />
          <Route
            path="/pessoas_admin"
            render={(props) => <PeoplesAdmin ButtonTop={<ButtonTop />} />}
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { isVisibleBtnToTop: state.isVisibleBtnToTopReducer };
};
const mapDispatcherstoProps = {
  isVisibleBtnToTopAction: isVisibleBtnToTopAction,
};
const Content = connect(mapStateToProps, mapDispatcherstoProps)(_Content);
export { Content };
