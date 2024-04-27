import React from "react";
import { useSelector } from "react-redux";
import BookListItem from "./BookListItem";

const BookList = () => {

  const books = useSelector((state) => state);
  console.log(books);

  return (
    <div>
      <BookListItem /> 
    </div>

  );
};

export default BookList;