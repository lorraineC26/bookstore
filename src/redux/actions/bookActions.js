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

export const editSelectedBook = (editBook) => {
  return {
    type: ActionTypes.EDIT_SELECTED_BOOK,
    payload: editBook,
  };
}

export const deleteBook = (bookID) => {
  return {
    type: ActionTypes.DELETE_BOOK,
    payload: bookID,
  };
}

export const openAddBookModal = () => {
  return {
    type: ActionTypes.OPEN_ADD_BOOK_MODAL,
  }
}

export const addBook = (newBook) => {
  return {
    type: ActionTypes.ADD_BOOK,
    payload: newBook
  }
}

export const closeAddBookModal = () => {
  return {
    type: ActionTypes.CLOSE_ADD_BOOK_MODAL,
  }
}

