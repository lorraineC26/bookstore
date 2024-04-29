import { React, useState } from "react";

import "../styles/AddBookModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import defaultCover from "../assets/defaultCover.png"
import { addBook } from "../redux/actions/bookActions";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const AddBookModal = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(), // Generate a unique ID for the new book
      title,
      price,
      category,
      description,
    };

    dispatch(addBook(newBook));

    // Clear form fields
    setTitle("");
    setPrice("");
    setCategory("");
    setDescription("");

    // close the modal

    
  };


  return (
    <div className="add-book-modal">
      <h2>Add a New Book</h2>

      <img src={defaultCover} alt="defalut cover" />

      <form onSubmit={handleAddBook}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBookModal;