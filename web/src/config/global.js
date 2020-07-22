import React from "react";
export const baseApiUrl = "http://localhost:8080";
export const axios = require("axios");
export const title = (text) => {
  return (
    <div className="title">
      <h1>{text}</h1>
      <hr align="center" className="row-design" />
    </div>
  );
};
export function cardDocuments(_document) {
  const { id } = _document;
  return (
    <ul id={id} key={id} className="cards">
      <li className="cards__item">
        <div className="card">
          <div className="card__content">
            <div dangerouslySetInnerHTML={{ __html: _document.title }}></div>
            <div className="card-document-content">
              <div
                dangerouslySetInnerHTML={{ __html: _document.description }}
              ></div>
              <div dangerouslySetInnerHTML={{ __html: _document.anexos }}></div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default { baseApiUrl, axios, title };
