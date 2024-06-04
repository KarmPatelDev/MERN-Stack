import React, {useState} from "react";

const App = () => {
  
  const purple = "#8e44ad";
  const [bg, bgcolor] = useState(purple);

  const [name, nameChange] = useState("Click ME");
  
  const bgChange = () => {
    bgcolor("red");
  }

  const nameChangef = () => {
    nameChange("Click HERE");
  }

  return (
    <>
      <div style={{backgroundColor:bg}}>
        <button onClick={bgChange} onDoubleClick={nameChangef}>{name}</button>
      </div>
    </>
  );
};

export default App;