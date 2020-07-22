import React from "react";
import Editor from "react-medium-editor";
import { title as titleGlobal } from "../../../config";

import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";

export var __document;

export function _production({ ...props }) {
  const {
    isDocumentVisibleAction,
    isVisible,
    _documents,
    ButtonTop,
    newDocumentAction,
    _document,
  } = props;
  __document = _document;

  return (
    <div id="documentos" className="documents">
      {ButtonTop}
      {titleGlobal("Documentos")}
      {isVisible && __document ? cardDocuments(props) : _documents}
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

export function setDocument(data, setDocumentAction) {
  setDocumentAction({ [data.text]: data.value, text: data.text, __document });
}

export function editor(text, setDocumentAction) {
  return (
    <Editor
      // style = {text === 'title' ? {width:'100%'} : {width:'50%', height: '50%'} }
      text={__document[text]}
      onChange={(value) => setDocument({ text, value }, setDocumentAction)}
    />
  );
}

export function cardDocuments({
  removeDocumentDb,
  setDocumentAction,
  setDocumentDb,
}) {
  const id = __document.id;
  return (
    <ul id={id} key={id} className="cards">
      <li className="cards__item">
        <div className="card">
          <div key={id} className="card__content">
            {editor("title")}
            <div className="card-document-content">
              {editor("description", setDocumentAction)}
              {editor("docs", setDocumentAction)}
            </div>
          </div>
          <div className="btn-sup">
            <button
              className="btn"
              onClick={() => removeDocumentDb(__document.id)}
            >
              Remover
            </button>
            <button className="btn" onClick={() => setDocumentDb(__document)}>
              Salvar
            </button>
          </div>
        </div>
      </li>
    </ul>
  );
}
