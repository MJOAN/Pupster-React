import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          NY Times Article Scraper
        </Link>
      </div>

      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/saved"
              ? "active"
              : ""
          }
        >
          <Link to="/">Saved</Link>
        </li>
        <li
          className={window.location.pathname === "/results" ? "active" : ""}>
          <Link to="/results">Results</Link>
        </li>
        <li className={window.location.pathname === "/search" ? "active" : ""}>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </div>
  </nav>

export default Navbar;
