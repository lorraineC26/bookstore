import { ActionTypes } from "../constants/action-types";

const initialState = {
  books:[],
  selectedBook:null,
  isBookModalOpen:false,
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

    default:
      return state;
  }
}


