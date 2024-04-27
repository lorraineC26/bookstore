import React from "react";
import { useSelector } from "react-redux";
import "../styles/BookListItem.scss";


const BookListItem = () => {
  const books = useSelector((state) => state.allBooks.books);

  const renderList = books.map((book) => {
    const {id, title, price, category, image, description} = book;

    return (
        <div className="book-list-item" >
          <div className="book-card">
            <div className="book-cover">
              <img src={image} alt={title} />
            </div>

            <div className="book-info">
              <div className="title">{title}</div>
              <div className="price">${price}</div>
              <div className="category">{category}</div>
            </div>

            <button>Delete</button>
          </div>


        </div>
    )
  })

  return (
    <>{renderList}</>
  )
  
};

export default BookListItem;
