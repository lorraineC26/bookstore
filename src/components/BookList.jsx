import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBookData } from "../redux/actions/bookActions";
import '../styles/BookList.scss'

import BookListItem from "./BookListItem";
import bookData from "../mock/books"

const BookList = () => {
  const dispatch = useDispatch();

  // mock a real api fetch
  const fetchBooks = () =>{dispatch(setBookData(bookData))};
  
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="book-list-container">
      <BookListItem /> 
    </div>

  );
};

export default BookList;