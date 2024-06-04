// It make easier the context api through use of useContext it likes a redux also.

import react, { useContext } from "react";
import { FirstName, LastName } from "./App";
import ChildC from "./ChildC";

const ChildB = () => {

  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  
  return (<>
    <h1>My Name is {fname} {lname}</h1>
  <ChildC />
  </>);
}

export default ChildB;