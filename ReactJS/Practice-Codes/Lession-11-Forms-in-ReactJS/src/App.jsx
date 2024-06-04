import React, { useState } from "react";

const App = () => {

  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");

  const [password, setPassword] = useState("");
  const [fullPass, setFullPass] = useState("");

  const inputEvent = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  }

  const inputEvent2 = (event) => {
    setPassword(event.target.value);
  }

  const showName = (event) => {
    event.preventDefault();
    setFullName(name);
    setFullPass(password);
  }
  return (
    <>
      <div>
        <form onSubmit={showName}>
          <h1>Hello, {fullName} {fullPass}</h1>
          {/*         
        We can write if not include value
        if val include then we cant't write it show error in console 
        we have to component
        controlled (input element controlled by react) AND uncontrolled (input element controlled by DOM) 
        We Can use defaultValue="" for writing but it is not better way
        Single Source Truth :-  All input field we pass the value that must be same for all
        that's why we use onChange input event and it pass the object
        if we write value="" with onChange then value show only one word
        */}
          <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={name} />
          <input type="password" placeholder="Enter Your Password" onChange={inputEvent2} value={password} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default App;
