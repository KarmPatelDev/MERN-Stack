import react, { useState } from "react";

const Myaccordian = ({ question, answer }) => {

  const [show, setShow] = useState(false);
  return (<>
    <div>
      <p onClick={() => setShow(!show)}>{show ? "-" : "+"}</p>
      <h1>{question}</h1>
    </div>
    {show && <p>{answer}</p>}
  </>
  );
}

export default Myaccordian;