import { actionsConst } from "../actions";

const initialState = {
  user: null,
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsConst.EMAIL_LOGIN_START:
      return { ...state, isLoading: true };
    case actionsConst.EMAIL_LOGIN_SUCCESS:
      return { ...state, user: action.payload.user, isLoading: false };
    default:
      return state;
  }
};

export default userReducer;
