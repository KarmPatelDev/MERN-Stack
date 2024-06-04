// useEffect use for give effect when every render
// if we use [] then it show effect only refreshing time
// and if use variable value in bracket then it show effect when that variable every time render
// it is use for show effect when render

import React, { useState, useEffect } from "react";

const App = () => {

  const [num, setNum] = useState(0);

  useEffect(() => {
    alert("Hello World");
    document.title = `You click ${num} Times`;
  });

  // //only when refresh show effect
  // useEffect(() => {
  //   alert("Hello World");
  // }, []);

  // //when num variable render show effect
  // useEffect(() => {
  //   alert("Hello World");
  // }, [num]);
  
  return (<>
     <button onClick={() => {setNum(num + 1)}}>Click Here {num}</button>
  </>);
}

export default App;
