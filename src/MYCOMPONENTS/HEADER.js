import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function HEADER(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                ABOUT
              </Link>
            </li>
          </ul>
          {props.search ? (
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search todos by title"
                aria-label="Search"
                value={props.searchValue || ""}
                onChange={(e) => props.onSearchChange(e.target.value)}
              />
            </form>
          ) : (
            "cant see anything"
          )}
        </div>
      </div>
    </nav>
  );
}

HEADER.propTypes = {
  title: PropTypes.string,
};
