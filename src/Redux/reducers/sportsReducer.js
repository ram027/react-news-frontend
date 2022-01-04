import { SPORTS_SUCCESS, SPORTS_FETCH_ERROR } from "../types";
const initState = {
  sportsPost: [],
  error: null,
};

const sportsReducer = (state = initState, action) => {
  switch (action.type) {
    case SPORTS_SUCCESS:
      return { ...state, sportsPost: action.sportsPost };
    case SPORTS_FETCH_ERROR:
      return state;
    default:
      return state;
  }
};

export default sportsReducer;
