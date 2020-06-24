import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        Total {this.props.countersCount} Countesr
      </nav>
    );
  }
}

export default NavBar;
