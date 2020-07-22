import { Component } from "react";
import { connect } from "react-redux";
import {
  getDocumentsAction,
  isDocumentVisibleAction,
  getPeoples,
} from "../../actions";
import { actionOnResize, main, barraNavegacao } from "./constants/";

class _BarraNavegacao extends Component {
  async componentDidMount() {
    const { getDocumentsAction, getPeoples } = this.props;
    await getDocumentsAction();
    await getPeoples();
    await actionOnResize();
  }

  render() {
    const props = this.props;
    main(props);
    return barraNavegacao(props);
  }
}
const mapStateToProps = (state) => ({
  _documents: state.getDocumentsReducer._documents,
  _peoples: state.getPeoplesReducer.titles,
});

const mapDispatcherstoProps = {
  getDocumentsAction,
  isDocumentVisibleAction,
  getPeoples,
};
const BarraNavegacao = connect(
  mapStateToProps,
  mapDispatcherstoProps
)(_BarraNavegacao);
export { BarraNavegacao };

// <Link smooth className="button active Link" to="/#home">Apresentação</Link>

// <Link smooth className="Link" to="/produção/#monografias">Monografias</Link>

// <Link smooth className="Link" to="/produção/#artigos">Artigos</Link>

// <Link smooth className="Link" to="/produção/#projetos">Projetos</Link>

// <Link className="Link" to="/admin">Administração(Provisório)</Link>
