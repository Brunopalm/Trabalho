import { actionsConst } from "../actions";

const initialState = false;

const isVisibleMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsConst.IS_VISIBLEMENU:
      state = action.isVisibleMenu;
      return state;
    default:
      return state;
  }
};

export default isVisibleMenuReducer;
