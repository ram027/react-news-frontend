import axios from "axios";
import { HEALTH_SUCCESS, HEALTH_FETCH_ERROR } from "../types";
export const health = () => {
  return (dispatch) => {
    axios
      .get(process.env.REACT_APP_HEALTH)
      .then((res) => {
        dispatch({
          type: HEALTH_SUCCESS,
          healthPost: res.data.articles.slice(0, 8),
        });
      })
      .catch((err) => {
        dispatch({ type: HEALTH_FETCH_ERROR, err: err });
      });
  };
};
