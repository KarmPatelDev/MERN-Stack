import React from 'react'
import ReactDOM from 'react-dom'

var name = 'Karm';
ReactDOM.render(
  <>
    <h2>My Name is {name} and Age is {2 + 2}</h2>
    <h2>My Name is {name + " " + (2 + 2)}</h2>
    <h2>{`My Name is ${name} and Age is ${2 + 2}`}</h2>
  </>,
  document.getElementById('root')
);