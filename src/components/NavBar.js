import React from "react";

function NavBar(props) {
  return (
    <nav className="navbar-light bg-light">
      <div className="navbar-brand">
        <i className="fa fa-shoppping-cart fa-lg m-2" />
        <span
          className="badge badge-pill badge-info m-2"
          style={{ width: 50 }}>
          </span>
        Items
      </div>
    </nav>
  );
}

export default NavBar;
