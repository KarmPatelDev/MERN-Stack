import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

var heading_style = {
  color: '#1bdf73',
  borderColor: 'black',
  margin: '50px 0',
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '3rem',
  fontFamily: '"Roboto", sans-serif',
}

var source = "https://picsum.photos/200/300";
ReactDOM.render(
  <>
    <h4 contentEditable="true" className="heading_6">Patel Karm Shaileshkumar</h4>
    <h4 style={heading_style}>Patel Karm Shaileshkumar</h4>
    <div className="div_6">
      <img src={source} alt="karm" />
      <img src={source} alt="karm" />
      <img src={source} alt="karm" />
    </div>
  </>,
  document.getElementById("root")
);