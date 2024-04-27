import { ActionTypes } from "../constants/action-types";


const initialState = {
  books:[],
};

export const bookReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case ActionTypes.SET_BOOK_DATA:
      return {...state, books: payload};
    default:
      return state;
  }
}