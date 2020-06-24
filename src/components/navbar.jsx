import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <p className="navbar-branc">
          NavBar
          <span className="badge badge-pill badge-secondary m-2">
            {this.props.countersCount}
          </span>
        </p>
      </nav>
    );
  }
}

export default NavBar;
