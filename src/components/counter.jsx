import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDelete, onDecrement } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span style={{ fontSize: 15 }} className={this.getBadgeClass()}>
            {this.formatCount()}
          </span>
        </div>

        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm  "
          >
            +
          </button>

          <button
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>

          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-sm btn-danger"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
