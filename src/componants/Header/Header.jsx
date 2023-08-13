import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import {ImSearch} from "react-icons/im";

const Header = () => {
  return (
    <nav className="header">
        <img src={logo} alt="logo" />
        <div>
            <Link to="/">Home</Link>
            <Link to="/tvshow">TV Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/news&popular">New & Popular</Link>
            <Link to="/mylist">My List</Link>
        </div>
        <ImSearch/>
    </nav>
  )
}

export default Header
