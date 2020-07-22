import { actionsConst } from "../actions";
const getPeoplesReducer = (state = { titles: [] }, action) => {
  switch (action.type) {
    case actionsConst.GET_PEOPlES:
      const { titles, data } = action.data;
      return { ...state, ...data, titles };
    default:
      return state;
  }
};

export default getPeoplesReducer;
