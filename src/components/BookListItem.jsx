import React from "react";
import { useSelector } from "react-redux";


const BookListItem = () => {
  const books = useSelector((state) => state.allBooks.bookData);
  const {id, title} = books[0]
  

  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">{title}</div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BookListItem;
