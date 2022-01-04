import { BUSINESS_SUCCESS, BUSINESS_FETCH_ERROR } from "../types";

const initState = {
  businessPost: [],
  error: null,
};

const businessReducer = (state = initState, action) => {
  switch (action.type) {
    case BUSINESS_SUCCESS:
      return { ...state, businessPost: action.businessPost };
    case BUSINESS_FETCH_ERROR:
      return state;
    default:
      return state;
  }
};

export default businessReducer;
