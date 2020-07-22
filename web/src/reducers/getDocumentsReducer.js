import { actionsConst } from "../actions";
const getDocumentsReducer = (state = { _documents: [] }, action) => {
  switch (action.type) {
    case actionsConst.GET_DOCUMENTS_DB:
      return action.data;
    case actionsConst.IS_DOCUMENT_VISIBLE:
      return { ...state, _visible: action.isDocumentVisible };
    case actionsConst.GET_BY_ID:
      return { ...state, _document: action.data };
    case actionsConst.SET_DOCUMENT:
      var _document = {
        [action.text]: action[action.text],
      };
      var _documentPast = action._document;
      return { ...state, _document: { ..._documentPast, ..._document } };
    case actionsConst.NEW_DOCUMENT:
      return { ...state, _document: { ...action.newDocument } };
    default:
      return state;
  }
};

export default getDocumentsReducer;
