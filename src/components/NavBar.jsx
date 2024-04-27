import React from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.scss';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-contents">
        <Link
          className="link"
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          {/* create a store logo later */}
          {/* <img />  */}
          <p>A Little Bookstore</p>
        </Link>

        {/* will link to a popup page later for adding new book */}
        <a href="#" className="add-new-book">Add Book</a>
      </div>

    </nav>
  );
}

export default NavBar;