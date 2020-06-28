import React from "react";

const NavBar = ({ countersCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <p className="navbar-branc">
        NavBar
        <span className="badge badge-pill badge-secondary m-2">
          {countersCount}
        </span>
      </p>
    </nav>
  );
};

export default NavBar;
