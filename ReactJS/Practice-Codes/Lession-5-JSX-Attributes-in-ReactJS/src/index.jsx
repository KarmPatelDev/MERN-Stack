import React from 'react'
import ReactDOM from 'react-dom'

var source = "https://picsum.photos/200/300";
var link = "https://www.youtube.com/";
ReactDOM.render(
  <>
    <h4 contentEditable="true">Patel Karm Shaileshkumar</h4>
    <br />
    <a href={link} target="_xyz">Click Here</a>
    <br />
    <img src={source} alt="karm" />
  </>,
  document.getElementById("root")
);