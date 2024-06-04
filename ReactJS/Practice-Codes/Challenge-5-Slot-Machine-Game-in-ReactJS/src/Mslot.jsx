import React from "react";
import Match from "./Match";
import Nmatch from "./Nmatch";

const Mslot = (props) => {
  return (
    <div>
      <h1>{props.x} {props.y} {props.z}</h1>
      {
        ((props.x === props.y) && (props.y === props.z)) ? <Match /> : <Nmatch />
      }
    </div>
  );
};

export default Mslot;