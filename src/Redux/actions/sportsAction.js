import axios from "axios";
import { SPORTS_SUCCESS, SPORTS_FETCH_ERROR } from "../types";
export const sports = () => {
  return (dispatch) => {
    axios
      .get(process.env.REACT_APP_SPORTS)
      .then((res) => {
        dispatch({
          type: SPORTS_SUCCESS,
          sportsPost: res.data.articles.slice(0, 8),
        });
      })
      .catch((err) => {
        dispatch({ type: SPORTS_FETCH_ERROR, err: err });
      });
  };
};
