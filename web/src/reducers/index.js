import { combineReducers } from "redux";
import isUserReducer from "./isUserReducer";
import isAuthReducer from "./isAuthReducer";
import isVisibleMenuReducer from "./isVisibleMenuReducer";
import isVisibleBtnToTopReducer from "./isVisibleBtnToTopReducer";
import getDocumentsReducer from "./getDocumentsReducer";
import getPeoplesReducer from "./getPeoplesReducer";

import { reducer as toastrReducer } from "react-redux-toastr";

export default combineReducers({
  toastr: toastrReducer,
  isAuthReducer,
  isUserReducer,
  getDocumentsReducer,
  getPeoplesReducer,
  isVisibleBtnToTopReducer,
  isVisibleMenuReducer,
});
