import React from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.scss';
import logo from '../assets/logo.png';

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
          <img src={logo} alt="logo"/>
        </Link>

        {/* will link to a popup page later for adding new book */}
        <button className="add-new-book">Add Book</button>
      </div>

    </nav>
  );
}

export default NavBar;