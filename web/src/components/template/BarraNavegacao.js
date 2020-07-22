import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import $ from "jquery";

class BarraNavegacao extends Component {
  componentDidMount() {
    $(window).on("load resize", function () {
      if (window.innerWidth > 990) {
        $("li").addClass("show");
      } else {
        $("li").removeClass("show");
      }
    });
  }
  render() {
    return (
      <div className="container">
        <Link smooth className="button active Link" to="/#home">
          Apresentação
        </Link>
        <div className="dropdown button-sup">
          <div className="button" data-toggle="dropdown" aria-expanded="false">
            {this.props.text ? "Editar Pessoas" : "Pessoas"}
          </div>
          <div
            className="dropdown-menu"
            style={{ border: 0, backgroundColor: "#1d9af2", marginTop: 0 }}
          >
            <Link smooth className="Link" to="/pessoas/#home">
              Professores
            </Link>
            <Link smooth className="Link" to="/pessoas/#administração">
              Administração
            </Link>
            <Link smooth className="Link" to="/pessoas/#discentes">
              Discentes
            </Link>
          </div>
        </div>
        <div className="dropdown button-sup">
          <div className="button" data-toggle="dropdown" aria-expanded="false">
            {this.props.text ? "Editar Documentos" : "Documentos"}
          </div>
          <div
            className="dropdown-menu"
            style={{ border: 0, backgroundColor: "#1d9af2", marginTop: 0 }}
          >
            <Link smooth className="Link" to="/documentos/#projetosPedagógicos">
              Projetos Pedagógicos
            </Link>
            <Link smooth className="Link" to="/documentos/#gradeCurricular">
              Grade Curricular Vigente
            </Link>
            <Link smooth className="Link" to="/documentos/#matrizCurricular">
              Matriz Curricular Vigente
            </Link>
            <Link smooth className="Link" to="/documentos/#regulamentos">
              Regulamentos
            </Link>
            <Link smooth className="Link" to="/documentos/#formulários">
              Formulários
            </Link>
            <Link
              smooth
              className="Link"
              to="/documentos/#diretrizesCurriculares"
            >
              Diretrizes Curriculares
            </Link>
          </div>
        </div>
        <div className="dropdown button-sup">
          <div className="button" data-toggle="dropdown" aria-expanded="false">
            {this.props.text ? "Editar Produção" : "Produção"}
          </div>
          <div
            className="dropdown-menu"
            style={{ border: 0, backgroundColor: "#1d9af2", marginTop: 0 }}
          >
            <Link smooth className="Link" to="/produção/#monografias">
              Monografias
            </Link>
            <Link smooth className="Link" to="/produção/#artigos">
              Artigos
            </Link>
            <Link smooth className="Link" to="/produção/#projetos">
              Projetos
            </Link>
          </div>
        </div>
        <div className="dropdown button-sup">
          <div className="button" data-toggle="dropdown" aria-expanded="false">
            Link Úteis
          </div>
          <div
            className="dropdown-menu"
            style={{ border: 0, backgroundColor: "#1d9af2", marginTop: 0 }}
          >
            <div className="Link estado">
              <a href="/">Avaliação dos Alunos</a>
            </div>
            <div className="Link estado">
              <a href="/">Avaliação dos professores</a>
            </div>
            <div className="Link estado">
              <a href="/">Pré-Matrícula</a>
            </div>
            <div className="Link estado">
              <a href="/">SCTI</a>
            </div>
            <Link className="Link" to="/admin">
              Administração(Provisório)
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default BarraNavegacao;
