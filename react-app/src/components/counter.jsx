import React, { Component } from "react";

class Counter extends Component {

    componentDidUpdate(prevProps, prevState){
        console.log("prevProps:", prevProps);
        console.log("prevState:", prevState);
        if(prevProps.counter.value !== this.props.counter.value){
            console.log("Diff in", this.props.counter.id, "id Counter");
        }
    }

    //When something is deleted
    componentWillUnmount(){
        console.log("Counter - Unmounted");
    }

  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDeleted(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h3>Zero</h3> : value;
  }
}

export default Counter;
