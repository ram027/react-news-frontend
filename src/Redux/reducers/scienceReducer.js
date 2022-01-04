import { SCIENCE_SUCCESS, SCIENCE_FETCH_ERROR } from "../types";
const initState = {
  sciencePost: [],
  error: null,
};

const scienceReducer = (state = initState, action) => {
  switch (action.type) {
    case SCIENCE_SUCCESS:
      return { ...state, sciencePost: action.sciencePost };
    case SCIENCE_FETCH_ERROR:
      return state;
    default:
      return state;
  }
};

export default scienceReducer;
