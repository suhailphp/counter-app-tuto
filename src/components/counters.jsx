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
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter value={counter.value} selected="true" key={counter.id}>
            <h4>Movie ID is #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
