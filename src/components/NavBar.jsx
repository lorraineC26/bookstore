import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { openAddBookModal } from "../redux/actions/bookActions";

import '../styles/NavBar.scss';
import logo from '../assets/logo.png';

const NavBar = () => {
  const dispatch = useDispatch();
  const handleClickOpen = () => {dispatch(openAddBookModal());}

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

        <button className="add-new-book" onClick={()=> handleClickOpen()}>Add Book</button>
      </div>

    </nav>
  );
}

export default NavBar;