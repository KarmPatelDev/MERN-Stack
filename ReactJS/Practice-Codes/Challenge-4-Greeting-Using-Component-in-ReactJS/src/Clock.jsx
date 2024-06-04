import React from "react";
import './App.css';

function Clock() {

  var date = new Date();
  var hour = date.getHours();
  var greeting = '';
  var greetStyle = {};

  if (hour >= 0 && hour < 12) {
    greeting = 'Good Morning';
    greetStyle.color = "blue";
  }
  else if (hour >= 12 && hour < 16) {
    greeting = 'Good Afternoon';
    greetStyle.color = "yellow";
  }
  else if (hour >= 16 && hour < 19) {
    greeting = 'Good Evening';
    greetStyle.color = "orange";
  }
  else {
    greeting = 'Good Night';
    greetStyle.color = "red";
  }

  return (
    <div className='greetBox'>
      <h1 className='greet'>Hello Sir, <span style={greetStyle}>{greeting}</span></h1>
    </div>
  );
}

export default Clock;