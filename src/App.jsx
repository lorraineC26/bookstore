import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";

import NavBar from './components/NavBar';
import BookList from './components/BookList';
import BookDetailsModal from './components/BookDetailsModal';
import AddBookModal from './components/AddBookModal';

function App() {

  const bookModalState = useSelector((state) => state.allBooks.isBookModalOpen);
  const addBookModalState = useSelector(
    (state) => state.allBooks.isAddBookModalOpen
  );

  return (
    <div className="App">
      <Router>
        <NavBar />
        <BookList />

        {/* only show the book details popup when isOpenModal is true */}
        {bookModalState && <BookDetailsModal />}

        {addBookModalState && <AddBookModal />}
      </Router>
    </div>
  );
}

export default App;
