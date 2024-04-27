import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookData } from "../redux/actions/bookActions";

import BookListItem from "./BookListItem";
import bookData from "../mock/books"

const BookList = () => {
  const books = useSelector((state) => state);
  const dispatch = useDispatch();

  
  // mock a real api fetch
  const fetchBooks = () =>{dispatch(setBookData(bookData))};
  
  useEffect(() => {
    fetchBooks();
  }, []);
  
  console.log("Books:", books);

  return (
    <div className="ui grid container">
      <BookListItem /> 
    </div>

  );
};

export default BookList;