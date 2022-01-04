import axios from "axios";
import { WORLD_FETCH_ERROR, WORLD_SUCCESS } from "../types";
export const world = () => {
  return (dispatch) => {
    axios
      .get(process.env.REACT_APP_WORLD)
      .then((res) => {
        dispatch({
          type: WORLD_SUCCESS,
          worldPost: res.data.articles.slice(0, 8),
        });
      })
      .catch((err) => {
        dispatch({ type: WORLD_FETCH_ERROR, err: err });
      });
  };
};
