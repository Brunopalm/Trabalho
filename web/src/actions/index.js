import axios from "axios";
import { baseApiUrl, notificConfig } from "../config";
import { bindActionCreators } from "redux";
import { getDb, cardDocuments } from "../config";
import { actions as toastrActions } from "react-redux-toastr";

export const actionsConst = {
  EMAIL_LOGIN_START: "@@EMAIL_LOGIN_START",
  EMAIL_LOGIN_SUCCESS: "@@EMAIL_LOGIN_SUCCESS",
  IS_AUTHENTIFICATED: "@@IS_AUTHENTIFICATED",
  IS_VISIBLEMENU: "@@IS_VISIBLEMENU",
  IS_VISIBLE_BTN_TO_TOP: "@@IS_VISIBLE_BTN_TO_TOP",
  GET_DOCUMENTS_DB: "@@GET_DOCUMENTS_DB",
  IS_DOCUMENT_VISIBLE: "@@IS_DOCUMENT_VISIBLE",
  GET_BY_ID: "@@GET_BY_ID",
  SET_DOCUMENT: "@@SET_DOCUMENT",
  NEW_DOCUMENT: "@@NEW_DOCUMENT",
  newDocument: {
    title: "<h3><i>Titulo</i></h3>",
    anexos:
      '<div><div></div></div><b><div style="text-align: right;"><b style="font-size: 1rem;">Anexos</b><span style="font-size: 1rem; font-weight: 400;">:</span></div></b><div></div>',
    description:
      '<div style="text-align: left;"><b style="font-size: 1rem;">Descrição</b><span style="font-size: 1rem;">:</span></div><div></div><br>',
  },
  GET_PEOPlES: "@@GET_PEOPlES",
};

function isVisibleBtnToTopDispatch(dispatch, isVisibleBtn = "") {
  dispatch({
    type: actionsConst.IS_VISIBLE_BTN_TO_TOP,
    isVisibleBtn,
  });
}

export const isVisibleBtnToTopAction = (event, isVisibleBtn) => async (
  dispatch
) => {
  if (event.target.scrollTop > 12) {
    isVisibleBtnToTopDispatch(dispatch, isVisibleBtn);
  } else {
    isVisibleBtnToTopDispatch(dispatch, "");
  }
};

export const createIdAndTitle = (obj, dispatch) => {
  var div = document.createElement("div");
  div.innerHTML = obj.title;

  var element = div.getElementsByTagName("i");
  var title;
  if (element.item(0)) {
    title = element.item(0).innerText;
  } else {
    element = div.getElementsByTagName("p");
    title = element.item(0).innerText;
  }

  return { title, id: obj.id };
};

export const getDocumentsAction = (id) => async (dispatch) => {
  try {
    if (!id) {
      const { data } = await getDb("documents");
      const _documents = [];
      const _documentsPreview = [];
      data.data.map((_document) => {
        _documents.push(createIdAndTitle(_document, dispatch));
        _documentsPreview.push(cardDocuments(_document));
        return true;
      });
      dispatch({
        type: actionsConst.GET_DOCUMENTS_DB,
        data: {
          _document: data.data[0],
          isVisible: true,
          _documents,
          _documentsPreview,
        },
      });
    } else {
      const { data } = await getDb("documents", id);
      dispatch({
        type: actionsConst.GET_BY_ID,
        data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const isDocumentVisibleAction = (isDocumentVisible) => async (
  dispatch
) => {
  await dispatch({
    type: actionsConst.IS_DOCUMENT_VISIBLE,
    isDocumentVisible,
  });
};

export const setDocumentAction = ({ ..._document }) => async (dispatch) => {
  await dispatch({
    type: actionsConst.SET_DOCUMENT,
    ..._document,
  });
};

export const newDocumentAction = () => async (dispatch) => {
  await dispatch({
    type: actionsConst.NEW_DOCUMENT,
    newDocument: actionsConst.newDocument,
  });
};

export const emailLogin = ({ email, password }) => async (dispatch) => {
  const toastr = bindActionCreators(toastrActions, dispatch);
  dispatch({ type: actionsConst.EMAIL_LOGIN_START });
  try {
    const response = await axios.post(`${baseApiUrl}/signin`, {
      email: email,
      password: password,
    });
    dispatch({
      type: actionsConst.EMAIL_LOGIN_SUCCESS,
      payload: {
        user: { ...response.data },
      },
    });
    dispatch(isAuthAction(true));
    toastr.add(notificConfig("Login efetuado com sucesso!!", "success"));
  } catch (error) {
    toastr.add(notificConfig(error.response.data, "error"));
  }
};

export const isVisibleMenuAction = (isVisibleMenu) => {
  return {
    type: actionsConst.IS_VISIBLEMENU,
    isVisibleMenu,
  };
};

export const isAuthAction = (isAuth) => {
  return {
    type: actionsConst.IS_AUTHENTIFICATED,
    isAuth,
  };
};

export const getPeoples = () => async (dispatch) => {
  try {
    let response = await getDb("peoples");
    const peoplesRes = response.data.data;

    let peoples = peoplesRes.map(async (people) => {
      response = await getDb(`people/${people.title}`);
      if (response) {
        return { [people.title]: response.data };
      }
    });

    peoples.map((people) => {
      people.then((data) => {
        dispatch({
          type: actionsConst.GET_PEOPlES,
          data: { data, titles: peoplesRes },
        });
      });
      return true;
    });
  } catch (err) {
    return false;
  }
};
