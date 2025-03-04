import React from "react";
import "./Components.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar navbar-dark fixed-top custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand custom-logo" to="/">
          Occult Studio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Welcome to Occult Studio
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to="home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item my-3">
                <Link to="services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item mt-3">
                <Link to="contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
