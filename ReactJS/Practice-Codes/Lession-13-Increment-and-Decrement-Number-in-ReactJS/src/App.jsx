import React, { useState } from "react";

const App = () => {

  const [num, setNum] = useState(0);

  const Inc = () => {
    setNum(num + 1);
  }

  const Dec = () => {
    if(num > 0){
      setNum(num - 1);
    }
    else{
      alert("You Can't Decrement Below 0");
      setNum(0);
    }
    
  }
  return (
    <>
      <div> 
      <div><h1>{num}</h1></div>
      <div>
        <button onClick={Inc}>Increment</button>
        <button onClick={Dec}>Decrement</button>
      </div>
      </div>
    </>
  );
};

export default App;

