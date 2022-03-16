import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4},
      { id: 2, value: 10},
      { id: 3, value: 1},
      { id: 4, value: 0},
    ],
  };
  render() {
      //Wthv we set on value={} will be inside this.props in the component
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            selected={counter.selected}
            id={counter.id}
          >
              <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
