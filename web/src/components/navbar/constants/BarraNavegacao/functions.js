import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export var __documents = [];
export var __peoples = [];
export function renderBarraNavegacao() {}

export function barraNavegacao({ text }) {
  return (
    <div className="container">
      <div className="dropdown button-sup">
        <div className="button" data-toggle="dropdown">
          {text ? `${text} Pessoas` : "Pessoas"}
        </div>
        <div
          className="dropdown-menu"
          style={{ border: 0, backgroundColor: "#1d9af2", marginTop: 0 }}
        >
          {__peoples}
        </div>
      </div>
      <div className="dropdown button-sup">
        <div className="button" data-toggle="dropdown">
          {text ? `${text} Documentos` : "Documentos"}
        </div>
        <div
          className="dropdown-menu"
          style={{ border: 0, backgroundColor: "#1d9af2", marginTop: 0 }}
        >
          {__documents}
        </div>
      </div>
      <div className="dropdown button-sup">
        <div className="button" data-toggle="dropdown">
          {text ? `${text} Produção` : "Produção"}
        </div>
        <div
          className="dropdown-menu"
          style={{ border: 0, backgroundColor: "#1d9af2", marginTop: 0 }}
        ></div>
      </div>
      <div className="dropdown button-sup">
        <div className="button" data-toggle="dropdown">
          Link Úteis
        </div>
        <div
          className="dropdown-menu"
          style={{ border: 0, backgroundColor: "#1d9af2", marginTop: 0 }}
        ></div>
      </div>
    </div>
  );
}

export function menu(self) {
  var pathCompleted =
    self.path === "_admin"
      ? `/${self.pathSpecific}${self.path}/#home`
      : `/${self.pathSpecific}/#${self.id}`;

  return (
    <Link
      smooth
      key={self.id}
      onClick={() => self.get(self.id) && self.visible(true)}
      className="Link"
      to={`${pathCompleted}`}
    >
      {self.title}
    </Link>
  );
}

export function document(_document, props) {
  const { path, isDocumentVisibleAction, getDocumentsAction } = props;
  return {
    title: _document.title,
    id: _document.id,
    get: (id) => getDocumentsAction(id),
    visible: () => isDocumentVisibleAction,
    pathSpecific: "documentos",
    path,
  };
}

export function people(_people, props) {
  const { path, isDocumentVisibleAction, getDocumentsAction } = props;
  return {
    title: _people.title,
    id: _people.id,
    get: (id) => getDocumentsAction(id),
    visible: () => isDocumentVisibleAction,
    pathSpecific: "pessoas",
    path,
  };
}

export function main(props) {
  __documents = props._documents.map((_document) => {
    return menu(document(_document, props));
  });
  __peoples = props._peoples.map((_people) => {
    return menu(people(_people, props));
  });
}
