import React from "react";
import "./NavBar.css";

function Nav() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          EverGreen
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="/">
              Home
            </a>
            <a className="nav-link" href="/sativas">
              Sativa
            </a>
            <a className="nav-link" href="/indicas">
              Indica
            </a>
            <a className="nav-link" href="/hybrids">
              Hybrids
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
