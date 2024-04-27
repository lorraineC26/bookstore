import React from "react";
import { useSelector } from "react-redux";

const BookList = () => {

  const books = useSelector((state) => state)
  console.log(books);

  return (
    <div>
      <h1>Book List</h1>
    </div>

  );
};

export default BookList;