import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 6 },
      { id: 2, value: 3 },
      { id: 3, value: 9 },
      { id: 4, value: 5 },
    ],
  };
  handleDelete = (id) => {
    this.setState({
      counters: this.state.counters.filter((counter) => counter.id !== id),
    });
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
