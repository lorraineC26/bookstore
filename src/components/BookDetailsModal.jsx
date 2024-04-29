import {React, useState} from "react";

import "../styles/BookDetails.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  removeSelectedBook,
  editSelectedBook,
} from "../redux/actions/bookActions";

const BookDetailsModal = () => {
  const selectedBook = useSelector((state) => state.allBooks.selectedBook);
  const { id, title, price, category, image, description } = selectedBook;

  const dispatch = useDispatch();

  // control if the edit form is hidden
  const [isEditOn, setIsEdit] = useState(false);

  // to track edited book details
  const [editedBook, setEditedBook] = useState(selectedBook);

  // to close the popup, clean off `selectedBook state in redux`
  const handClickClose = () => {
    dispatch(removeSelectedBook());
  };

  // turn on edit mode
  const handleEditOn = () => {
    setIsEdit(true)
  }

  // watch book editing modifications
  const handleEditChange = (e) => {
    setEditedBook({
      ...editedBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditSubmit = () => {
    dispatch(editSelectedBook(editedBook));
    handClickClose();
  }


  return (
    <div className="book-details-container">
      <div className="book-details-buttons">
        <button className="book-details__close-button" onClick={handClickClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>

        {!isEditOn && (
          <button className="book-details__edit-button" onClick={handleEditOn}>
            Edit
          </button>
        )}
      </div>

      <div className="book-details-card">
        <img className="book-details-image" src={image} alt="cover image" />

        {!isEditOn && (
          <section className="book-details-info">
            <div className="title">{title}</div>
            <div className="price">{price}</div>
            <div className="category">{category}</div>
            <div className="description">{description}</div>
          </section>
        )}

        {isEditOn && (
          <form className="edit-form" onSubmit={handleEditSubmit}>
            <span>Title:</span>
            <input
              type="text"
              name="title"
              value={editedBook.title}
              onChange={handleEditChange}
            />

            <span>Price:</span>
            <input
              type="text"
              name="price"
              value={editedBook.price}
              onChange={handleEditChange}
            />

            <span>Category:</span>
            <input
              type="text"
              name="category"
              value={editedBook.category}
              onChange={handleEditChange}
            />

            <span>Description:</span>
            <textarea
              name="description"
              value={editedBook.description}
              onChange={handleEditChange}
            />

            <button type="submit" className="submit">
              Save Changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookDetailsModal;
