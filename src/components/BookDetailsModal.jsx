import React from "react";

import '../styles/BookDetails.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import { useDispatch } from "react-redux";
import { selectedBook } from "../redux/actions/bookActions";

const BookDetailsModal = () => {

  const dispatch = useDispatch();

  dispatch(selectedBook());


  return (
    <div className="book-details-container">
      <button
        className="book-details__close-button"
        // onClick={handClickClose}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="book-details-card">
        <img 
          className="book-details-image"
          src="https://dynamic.indigoimages.ca/v1/books/books/1368092209/1.jpg?width=810&maxHeight=810&quality=85" 
          alt="book cover" 
        />

        <section className="book-details-info">
          <div>book name</div>
          <div>price</div>
          <div>category</div>
          <div>description</div>
        </section>
      </div>

    </div>
  );
};

export default BookDetailsModal;
