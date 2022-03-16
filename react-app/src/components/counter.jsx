import React, { Component } from "react";

class Counter extends Component {
    state = { 
        count: 1,
        tags: []
    };

    renderTags(){
        if(this,this.state.tags.length === 0) return <p>There are no tags!</p>

        return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul>
    }

    render() {
        let classes = this.getBadgeClasses();

        return <div>
            {this.state.tags.length === 0 && "Please create a new tag"}
            {this.renderTags()}
        </div>
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
