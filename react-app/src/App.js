import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 10 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
    ],
  };

  //ideal for state assignment
  constructor() {
    super();
    console.log("App - Constructor");
  }

  //Perfect place to make ajax call to fetch data from db
  //Also this means when VirtualDom fro render is mounted to Real Dom
  componentDidMount() {
    console.log("App - Mounted");
  }

  handleDelete = (counterId) => {
    const countersFiltered = this.state.counters.filter(
      (c) => c.id !== counterId
    );
    this.setState({ counters: countersFiltered });
  };

  handleReset = () => {
    const countersReset = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: countersReset });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  //Virtual dom is defined here
  render() {
    console.log("App - rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDeleted={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
