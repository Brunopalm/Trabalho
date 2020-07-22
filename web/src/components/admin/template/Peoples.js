import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Discentes,
  Professores,
  Administração,
} from "../../../components/peoples";
import { settings } from "../../../components";
import { title as titleFunction } from "../../../config";

import Slider from "react-slick";
import "../../../components/peoples/css/People.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Peoples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Discentes,
      Professores,
      Administração,
    };
  }

  slider(setting, _peoples) {
    const { peoples, title } = _peoples;
    return (
      <Slider {...settings[setting]}>
        {peoples ? peoples.map((people) => this.state[title](people)) : null}
      </Slider>
    );
  }

  main(peoples, titles) {
    const { title, id } = titles;
    const className = `${title}`.toLowerCase();
    return (
      <div key={id} className={className}>
        {titleFunction(title)}
        {this.slider(`center${title}`, { peoples: peoples[title], title })}
      </div>
    );
  }
  render() {
    const { peoples, ButtonTop } = this.props;
    const { titles } = peoples;
    return (
      <div>
        {ButtonTop}
        {titles.map((titles) => this.main(peoples, titles))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  peoples: state.getPeoplesReducer,
});

const People = connect(mapStateToProps)(Peoples);
export { People };
