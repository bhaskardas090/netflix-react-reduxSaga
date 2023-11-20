import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoContainer">
        <img src={Logo} alt="Netflix" className="logo" />
      </div>
      <nav className="navLinks">
        <NavLink className="link">Home</NavLink>
        <NavLink className="link">TV Shows</NavLink>
        <NavLink className="link">Movies</NavLink>
        <NavLink className="link">New & Popular</NavLink>
        <NavLink className="link">My List</NavLink>
      </nav>
      <div className="navbarFeatures">
        <span className="searchIconContainer">
          <IoSearchOutline className="searchIcon" />
        </span>
        <span className="userIconContainer">
          <FaUserCircle className="userIcon" />
        </span>
        <div className="options">
          <span>Settings</span>
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
