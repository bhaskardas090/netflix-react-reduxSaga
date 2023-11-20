import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [showOptions, setshowOptions] = useState(false);

  const optionsRef = useRef(null);
  const navbarRef = useRef(null);

  window.onscroll = (e) => {
    if (window.scrollY > 0) {
      navbarRef.current.style.background = "var(--primary-color)";
    } else {
      navbarRef.current.style.background = "transparent";
    }
  };

  const handleShowOptions = () => {
    setshowOptions(!showOptions);
  };
  useEffect(() => {
    if (showOptions) {
      optionsRef.current.style.transition = "all 2s ease";
      optionsRef.current.style.display = "block";
    } else {
      optionsRef.current.style.display = "none";
    }
  }, [showOptions]);

  return (
    <div className="navbar" ref={navbarRef}>
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
        <span className="userIconContainer" onClick={handleShowOptions}>
          <FaUserCircle className="userIcon" />
        </span>
        <div className="options" ref={optionsRef}>
          <span>Settings</span>
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
