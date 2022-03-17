import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //Here on the prop counter we send all element data to the component, so it can manage it there
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDeleted={this.props.onDeleted}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
