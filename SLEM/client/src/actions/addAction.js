import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

export const addBook = userData => dispatch => {
  axios.
      post("/api/books/Addbook", userData)
      .then(res => console.log(userData))
      .catch(err =>
          dispatch({
              type: GET_ERRORS,
              payload: err.response.data
          })
      );
};