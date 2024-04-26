import { ActionTypes } from "../constants/action-types";

export const setBookData = (book) => {
  return {
    type: ActionTypes.SET_BOOK_DATA,
    payload: book,
  };
}

export const selectedBook = (book) => {
  return {
    type: ActionTypes.SELECTED_BOOK,
    payload: book,
  };
};
