import react from "react";
import { FirstName, LastName } from "./App";

const ChildC = () => {
  return (<>
    <FirstName.Consumer>{(fname) => {
      return (<>
        <LastName.Consumer>{(lname) => {
          return (<h1>My Name is {fname} {lname}</h1>);
        }}</LastName.Consumer>
      </>);
    }}</FirstName.Consumer>
  </>
  );
}

export default ChildC;