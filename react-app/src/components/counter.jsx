import React, { Component } from "react";

class Counter extends Component {
    state = { 
        count: 1
    };

    render() {
        let classes = this.getBadgeClasses();

        return (
        <React.Fragment>
            <span className={classes}> {this.formatCount()} </span>
            <button className="btn btn-secondary btn-sm" >Increment</button>
        </React.Fragment>
        );
  }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

  formatCount(){
      const { count } = this.state;
      return count === 0 ? <h3>Zero</h3> : count;
  }

}

export default Counter;
