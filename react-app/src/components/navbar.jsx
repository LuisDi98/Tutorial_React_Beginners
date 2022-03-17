import React, { Component } from "react";

//Stateless Functional Component
//added props in arrow funct that is is the same as this.props
//Also moved return from render() to the => funct
const NavBar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary m-2">
                {props.totalCounters}
            </span>
          </a>
        </nav>
      );
}

export default NavBar;
