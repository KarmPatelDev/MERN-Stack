import React, { useState } from "react";

const App = () => {

  const [sname, setName] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const fname = event.target.name;
    
    // we can use distructuring if we used name instead of fname
    // const {name, value} = event.target;

    setName((prev) => {
      console.log(prev);

      return {
        ...prev,
        [fname]: value,
      }

      // if(fname === "name"){
      //   return {
      //     name: value,
      //     password: prev.password,
      //     email: prev.email,
      //     phone: prev.phone,
      //   };
      // }
      // else if(fname === "password"){
      //   return {
      //     name: prev.name,
      //     password: value,
      //     email: prev.email,
      //     phone: prev.phone,
      //   };
      // }
      // else if(fname === "email"){
      //   return {
      //     name: prev.name,
      //     password: prev.password,
      //     email: value,
      //     phone: prev.phone,
      //   };
      // }
      // else if(fname === "phone"){
      //   return {
      //     name: prev.name,
      //     password: prev.password,
      //     email: prev.email,
      //     phone: value,
      //   };
      // }


    });
  }

  const showName = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  }

  return (
    <>
      <div>
        <form onSubmit={showName}>
          <h1>Hello</h1>
          <input name="name" type="text" placeholder="Enter Your Name" onChange={inputEvent} value={sname.name} />
          <input name="password" type="password" placeholder="Enter Your Password" onChange={inputEvent} value={sname.password} />
          <input name="email" type="email" placeholder="Enter Your Email" onChange={inputEvent} value={sname.email} />
          <input name="phone" type="number" placeholder="Enter Your Mobile Number" onChange={inputEvent} value={sname.phone} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default App;

