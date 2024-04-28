import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from './components/NavBar';
import BookList from './components/BookList';
import BookDetailsModal from './components/BookDetailsModal';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <BookList />

        {/* will be using a state to control whether the modal is open */}
        <BookDetailsModal />

      </Router>
    </div>
  );
}

export default App;
