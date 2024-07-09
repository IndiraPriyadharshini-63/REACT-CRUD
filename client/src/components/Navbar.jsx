import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import logo from "../assets/logo192.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top p-2">
        <a className="navbar-brand" href="/">
          <img src={logo} width="30" height="30" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-felx justify-content-around"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active p-2">
              <a className="nav-link" href="/">
                Home{" "}
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link" href="/create">
                Add Task
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link" href="/create-event">
                Create Event
              </a>
            </li>
          </ul>
          <form className="form-inline mx-2 my-lg-0  ">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary mx-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
