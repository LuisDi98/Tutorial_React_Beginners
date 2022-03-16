import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //State is local, private of this class
  //Props are constants (readonly), passed by parent class
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 10 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const countersFiltered = this.state.counters.filter(
      (c) => c.id !== counterId
    );
    this.setState({ counters: countersFiltered });
  };

  handleReset = () => {
      const countersReset = this.state.counters.map(counter => {
          counter.value = 0;
          return counter;
      })
      this.setState( { counters: countersReset } )
  }

  handleIncrement= (counter) => {
      const counters = [... this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter}
      counters[index].value++;
      this.setState({ counters })
  }


  render() {
    //Here on the prop counter we send all element data to the component, so it can manage it there
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
