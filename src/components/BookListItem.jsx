import React from "react";
import { useSelector } from "react-redux";


const BookListItem = () => {
  const books = useSelector((state) => state.allBooks.books);

  const renderList = books.map((book) => {
    const {id, title, price, category, image, description} = book;

    return (
      <div className="five column wide">
        <div className="ui link cards">

          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>

            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">${price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>

        </div>
      </div>
    )
  })

  return (
    <>{renderList}</>
  )
  
};

export default BookListItem;
