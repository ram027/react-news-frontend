import { TECH_FETCH_ERROR, TECH_SUCCESS } from "../types";
const initState = {
  techPost: "",
  error: null,
};

const techReducer = (state = initState, action) => {
  switch (action.type) {
    case TECH_SUCCESS:
      return { ...state, techPost: action.techPost };
    case TECH_FETCH_ERROR:
      return state;
    default:
      return state;
  }
};

export default techReducer;
