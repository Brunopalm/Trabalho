import React, { Component } from "react";
import { connect } from "react-redux";
import { title } from "../../config";
import "./css/Documentos.css";

class _Documents extends Component {
  render() {
    const { _documents, ButtonTop } = this.props;
    return (
      <div id="documentos" className="documents">
        {title("Documentos")}
        {_documents}
        {ButtonTop}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  _documents: state.getDocumentsReducer._documentsPreview,
});

const Documents = connect(mapStateToProps)(_Documents);
export { Documents };
