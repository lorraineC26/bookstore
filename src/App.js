import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from './components/NavBar';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <BookList />

      </Router>
    </div>
  );
}

export default App;
