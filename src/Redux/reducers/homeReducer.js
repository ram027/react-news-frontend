import { HOME_FETCH_ERROR, HOME_SUCCESS } from "../types";
const initState = {
  homePost: [],
  error: null,
};

const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case HOME_SUCCESS:
      return {
        ...state,
        homePost: action.homePost,
      };
    case HOME_FETCH_ERROR:
      return state;
    default:
      return state;
  }
};

export default homeReducer;
