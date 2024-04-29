import { ActionTypes } from "../constants/action-types";

const initialState = {
  books:[],
  selectedBook:null,
  isBookModalOpen:false,
  isAddBookModalOpen:false
};

export const bookReducer = (state = initialState, {type, payload}) => {
  console.log("name of the action type:", type)

  switch(type) {
    case ActionTypes.SET_BOOK_DATA:
      return {...state, books: payload};
    
    case ActionTypes.SELECTED_BOOK:
      return {
        ...state,
        isBookModalOpen:true,
        selectedBook: payload
      }
    
    case ActionTypes.REMOVE_SELECTED_BOOK:
      return {
        ...state,
        isBookModalOpen: false,
        selectedBook: null
      }
    
    case ActionTypes.EDIT_SELECTED_BOOK:
      return {
        ...state,

        // update the book info in the books array that shows on the main page
        books: state.books.map((book) => {
          if (book.id == payload.id) {
            return {
              ...book,
              ...payload,
            };
          }
          return book;
        }),

        // Update the selectedBook with the edited book
        selectedBook: payload
      };
    
    case ActionTypes.DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== payload),
      };

    case ActionTypes.OPEN_ADD_BOOK_MODAL:
      return {
        ...state,
        isAddBookModalOpen: true
      }

    case ActionTypes.ADD_BOOK:
      return {
        ...state,
        books:[...state.books, payload]
      }

    case ActionTypes.CLOSE_ADD_BOOK_MODAL:
      return {
        ...state,
        isAddBookModalOpen: false
      }

    default:
      return state;
  }
}


