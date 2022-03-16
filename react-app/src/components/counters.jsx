import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    //State is local, private of this class
    //Props are constants (readonly), passed by parent class
  state = {
    counters: [
      { id: 1, value: 4},
      { id: 2, value: 10},
      { id: 3, value: 1},
      { id: 4, value: 0},
    ],
  };
  render() {
    
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            selected={counter.selected}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
