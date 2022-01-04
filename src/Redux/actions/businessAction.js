import axios from "axios";
import { BUSINESS_SUCCESS, BUSINESS_FETCH_ERROR } from "../types";
export const business = () => {
  return (dispatch) => {
    axios
      .get(process.env.REACT_APP_BUSINESS)
      .then((res) => {
        dispatch({
          type: BUSINESS_SUCCESS,
          businessPost: res.data.articles.slice(0, 8),
        });
      })
      .catch((err) => {
        dispatch({ type: BUSINESS_FETCH_ERROR, err: err });
      });
  };
};
