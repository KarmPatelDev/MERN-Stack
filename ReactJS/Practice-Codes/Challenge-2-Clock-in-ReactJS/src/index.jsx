import React from 'react'
import ReactDOM from 'react-dom'

var date = new Date();
// Below show local computer time and date
var diffDate = new Date().toLocaleDateString();
var diffTime = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
    <h2>My Name is Patel Karm</h2>
    <p><b>{`Date - ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</b></p>
    <p><b>{`Date - ${diffDate}`}</b></p>
    <p><b>{`Time - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</b></p>
    <p><b>{`Time - ${diffTime}`}</b></p>
  </>,
  document.getElementById('root')
);