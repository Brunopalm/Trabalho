// import Slider from './Slider'
import React, { Component } from "react";
import LOGOCC from "../../IMGs/cccomputacaodois.svg";
import "./css/Home.css";
import Particles from "react-particles-js";
import { HashLink as Link } from "react-router-hash-link";
import ParticlesJSON from "./particles.json";

class Home extends Component {
  render() {
    return (
      <div>
        {this.props.ButtonTop}
        <div className="capa">
          <div className="inside-capa-sup">
            <Particles className="particles" params={ParticlesJSON} />
            <div className="inside-capa">
              <div className="img-capa rotate-left">
                <img src={LOGOCC} alt="LOGOCC" />
              </div>
              <div className="button-capa">
                <div className="in-left button-content">
                  <Link smooth to="#noticias" className="btn-custom">
                    últimas Notícias
                  </Link>
                  <Link smooth to="#ocurso" className="btn-custom">
                    Sobre o curso
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="noticias" id="noticias"></div>
      </div>
    );
  }
}
export { Home };
