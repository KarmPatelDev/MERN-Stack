import React, { useState } from "react";

const App = () => {

  let getTime = new Date().toLocaleTimeString();
  const [time, updateTime] = useState(getTime);

  const updateCTime = () => {
    getTime = new Date().toLocaleTimeString();
    updateTime(getTime);
  };

  setInterval(updateCTime, 1000);

  return (
    <>
      <h2>{time}</h2>
    </>
  );
};

export default App;