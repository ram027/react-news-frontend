import { HEALTH_SUCCESS, HEALTH_FETCH_ERROR } from "../types";
const initState = {
  healthPost: [],
  error: null,
};

const healthReducer = (state = initState, action) => {
  switch (action.type) {
    case HEALTH_SUCCESS:
      return { ...state, healthPost: action.healthPost };
    case HEALTH_FETCH_ERROR:
      return state;
    default:
      return state;
  }
};

export default healthReducer;
