/*
1. Hooks are the new feature introduced in React 16.8 version.
2. It allows you to use state and other react features without writing a class. Hooks are function which "Hook Into" React State and LifeCycle features from function components.
3. It does not work inside classes.
4. Hooks should always be used at the top level of the react functions.
5. Node Version 6 or above. NPM version 5.2 or above.
*/

import React, { useState } from "react";

// const name = ['vi', 'no', 'd'];
// // array distructuring
// const [name1, name2, name3] = name;
// // name1=vi name2=no name3=d
// console.log(name1);

const App = () => {
  // useState return array of two items one is state object(current data) and second is updated function(updated data)
  // useState() in the bracket '()' we add initial data

  const state = useState();
  console.log(state);

  const [count, setCount] = useState(0);

  const IncNum = () => {
    // count++; if we use this then it is not change the number in the display, in the backend count value is change
    // console.log(count);
    // console.log("Hello World");

    setCount(count + 1);
    // count++ not work in setCount
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncNum}>Click Here</button>
    </>
  );
};

export default App;
