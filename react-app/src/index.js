import React from 'react';
import ReactDOM from 'react-dom'

//JSX Hello World converts into a React.render thanks to Babel
const element = <h1>Hello World</h1>;
console.log(element);

//This one moves the VirtualDOM into the Real DOM
ReactDOM.render(element, document.getElementById('root'));