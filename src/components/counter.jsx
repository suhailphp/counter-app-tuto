import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["first item", "second item", "third item"],
  };
  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 15 }} class={this.getBadgeClass()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
