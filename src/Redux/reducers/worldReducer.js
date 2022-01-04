import { WORLD_FETCH_ERROR, WORLD_SUCCESS } from "../types";
const initState = {
  worldPost: "",
  error: null,
};

const worldReducer = (state = initState, action) => {
  switch (action.type) {
    case WORLD_SUCCESS:
      return { ...state, worldPost: action.worldPost };
    case WORLD_FETCH_ERROR:
      return state;
    default:
      return state;
  }
};

export default worldReducer;
