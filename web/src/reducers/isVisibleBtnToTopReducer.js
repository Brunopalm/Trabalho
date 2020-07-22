import { actionsConst } from "../actions";

const initialState = "1";

const isVisibleBtnToTopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsConst.IS_VISIBLE_BTN_TO_TOP:
      state = action.isVisibleBtn;
      return state;
    default:
      return state;
  }
};

export default isVisibleBtnToTopReducer;
