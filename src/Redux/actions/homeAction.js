import axios from "axios";
import { HOME_FETCH_ERROR, HOME_SUCCESS } from "../types";
export const home = () => {
  return (dispatch) => {
    axios
      .get(process.env.REACT_APP_HOME)
      .then((res) => {
        dispatch({
          type: HOME_SUCCESS,
          homePost: res.data.articles.slice(0, 8),
        });
      })
      .catch((err) => {
        dispatch({ type: HOME_FETCH_ERROR, err: err });
      });
  };
};
