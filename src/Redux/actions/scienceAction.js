import axios from "axios";
import { SCIENCE_SUCCESS, SCIENCE_FETCH_ERROR } from "../types";
export const science = () => {
  return (dispatch) => {
    axios
      .get(process.env.REACT_APP_SCIENCE)
      .then((res) => {
        dispatch({
          type: SCIENCE_SUCCESS,
          sciencePost: res.data.articles.slice(0, 8),
        });
      })
      .catch((err) => {
        dispatch({ type: SCIENCE_FETCH_ERROR, err: err });
      });
  };
};
