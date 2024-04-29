import React from "react";

import "../styles/BookDetails.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import { useSelector, useDispatch } from "react-redux";
import { removeSelectedBook } from "../redux/actions/bookActions";

const BookDetailsModal = () => {
  const selectedBook = useSelector((state) => state.allBooks.selectedBook);
  const { id, title, price, category, image, description } = selectedBook;

  const dispatch = useDispatch();

  const handClickClose = () => {
    dispatch(removeSelectedBook());
  };

  return (
    <div className="book-details-container">
      <button className="book-details__close-button" onClick={handClickClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="book-details-card">
        <img
          className="book-details-image"
          src={image}
          alt="cover image"
        />

        <section className="book-details-info">
          <div>{title}</div>
          <div>{price}</div>
          <div>{category}</div>
          <div>{description}</div>
        </section>
      </div>
    </div>
  );
};

export default BookDetailsModal;
