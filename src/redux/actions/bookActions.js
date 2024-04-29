import { ActionTypes } from "../constants/action-types";

export const setBookData = (book) => {
  // this object will be taken by the reducer
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

export const removeSelectedBook = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_BOOK
  }
}

export const editSelectedBook = (book) => {
  return {
    type: ActionTypes.EDIT_SELECTED_BOOK,
    payload: book
  }
}


