import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import logo from "../assets/logo192.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top p-2">
        <a className="navbar-brand" href="/">
          <img src={logo} width="30" height="30" alt="" className="m-2" />
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
          className="collapse navbar-collapse d-felx justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active p-2 ">
              <a className="nav-link font-weight-bold text-dark" href="/">
                Home{" "}
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link font-weight-bold text-dark" href="/create">
                Add Task
              </a>
            </li>
            <li className="nav-item p-2">
              <a
                className="nav-link font-weight-bold text-dark"
                href="/create-event"
              >
                Create Event
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
