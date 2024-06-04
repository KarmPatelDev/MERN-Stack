import React from 'react'
import ReactDOM from 'react-dom'

//const arr = ['Karm', 'Patel'];
//In React v16+ it's possible for render to return an array of elements

  // We Make Array
  // ReactDOM.render(
  // [
  // <h1>Karm </h1>,
  // <h2>Patel</h2>
  // ]
  // , document.getElementById('root'));

  //We use extra div element for make single element
  // ReactDOM.render(
  //   <div>
  //   <h1>Karm </h1>
  //   <h2>Patel</h2>
  //   </div>
  //   , document.getElementById('root'));


  // It is React Fragment it can't generate any element in root div so it's fast
    // ReactDOM.render(
    // <React.Fragment>
    // <h1>Karm </h1>
    // <h2>Patel</h2>
    // </React.Fragment>
    //   , document.getElementById('root'));

    //it's a special fragment syntax
    //React 16.2 intoduce a syntactical sugar for fragments
   // ReactDOM.render(
    // <>
    // <h1>Karm </h1>
    // <h2>Patel</h2>
    // </>
    //   , document.getElementById('root'));

  // Above Three Methods We Can use to render Multiple Element