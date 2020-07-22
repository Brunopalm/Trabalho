import { connect } from "react-redux";
import { _production } from "./constants";
import {
  newDocumentAction,
  isDocumentVisibleAction,
  setDocumentAction,
} from "../../actions";
import { setDocumentDb, removeDocumentDb } from "../../config";

import "../documents/css/Documentos.css";

function _Production({ ...props }) {
  return _production(props);
}

const mapStateToProps = (state) => ({
  _documents: state.getDocumentsReducer._documentsPreview,
  _document: state.getDocumentsReducer._document,
  isVisible: state.getDocumentsReducer.isVisible,
});

const mapDispatcherstoProps = {
  isDocumentVisibleAction,
  setDocumentAction,
  newDocumentAction,
  removeDocumentDb,
  setDocumentDb,
};

const Production = connect(mapStateToProps, mapDispatcherstoProps)(_Production);

export { Production };
