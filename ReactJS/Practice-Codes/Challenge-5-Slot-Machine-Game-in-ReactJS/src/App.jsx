import React from "react";
import Mslot from "./Mslot";
import "./App.css";

const App = () => {
  return <>
    <h1 className="heading_style"> Welcome To <span style={{ fontWeight: "bold" }}>Slot Game Machine</span> </h1>
    <div className="mslots">
      <Mslot x="5" y="8" z="1" />
      <hr />
      <Mslot x="5" y="5" z="5" />
      <hr />
      <Mslot x="5" y="8" z="1" />
    </div>
  </>;
}

export default App;
