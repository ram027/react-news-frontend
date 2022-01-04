import axios from "axios";
import { TECH_FETCH_ERROR, TECH_SUCCESS } from "../types";
export const tech = () => {
  return (dispatch) => {
    axios
      .get(process.env.REACT_APP_TECH)
      .then((res) => {
        dispatch({
          type: TECH_SUCCESS,
          techPost: res.data.articles.slice(0, 8),
        });
      })
      .catch((err) => {
        dispatch({ type: TECH_FETCH_ERROR, err: err });
      });
  };
};
