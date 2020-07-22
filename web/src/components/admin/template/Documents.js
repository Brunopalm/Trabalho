import React from "react";
import { connect } from "react-redux";
import {
  newDocumentAction,
  isDocumentVisibleAction,
  setDocumentAction,
} from "../../../actions";
import {
  title as titleGlobal,
  setDocumentDb,
  removeDocumentDb,
} from "../../../config";
import Editor from "react-medium-editor";
import options from "./settings";

import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";
import "../../documents/css/Documentos.css";

function DocumentsAdmin({
  isDocumentVisibleAction,
  isVisible,
  _document,
  _documents,
  ButtonTop,
  setDocumentAction,
  newDocumentAction,
  removeDocumentDb,
  setDocumentDb,
}) {
  function setDocument(text, value) {
    setDocumentAction({ [text]: value, text, _document });
  }

  function editor(text) {
    return (
      <Editor
        // style = {text === 'title' ? {width:'100%'} : {width:'50%', height: '50%'} }
        text={_document[text]}
        onChange={(value) => setDocument(text, value)}
        {...options}
      />
    );
  }

  function cardDocuments() {
    const id = _document.id;
    return (
      <ul id={id} key={id} className="cards">
        <li className="cards__item">
          <div className="card">
            <div key={id} className="card__content">
              {editor("title")}
              <div className="card-document-content">
                {editor("description")}
                {editor("anexos")}
              </div>
            </div>
            <div className="btn-sup">
              <button
                className="btn"
                onClick={() => removeDocumentDb(_document.id)}
              >
                Remover
              </button>
              <button className="btn" onClick={() => setDocumentDb(_document)}>
                Salvar
              </button>
            </div>
          </div>
        </li>
      </ul>
    );
  }
  return (
    <div id="documentos" className="documents">
      {ButtonTop}
      {titleGlobal("Documentos")}
      {isVisible && _document ? cardDocuments() : _documents}
      <div className="btn-inf">
        <button className="btn" onClick={() => newDocumentAction()}>
          Novo
        </button>
        <button
          className="btn"
          onClick={() => isDocumentVisibleAction(!isVisible)}
        >
          {isVisible ? "preview" : "editar"}
        </button>
      </div>
    </div>
  );
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

const Documents = connect(
  mapStateToProps,
  mapDispatcherstoProps
)(DocumentsAdmin);

export { Documents };
