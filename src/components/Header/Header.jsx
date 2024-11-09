import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contacts"}>Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
