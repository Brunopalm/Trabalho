import { actionsConst } from "../actions";

const initialState = false;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsConst.IS_AUTHENTIFICATED:
      state = action.isAuth;
      return state;
    default:
      return state;
  }
};

export default authReducer;
