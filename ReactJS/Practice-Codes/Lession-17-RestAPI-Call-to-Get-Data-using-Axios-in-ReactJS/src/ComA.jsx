import React, {useState, useEffect} from "react";
import axios from "axios";

const CompA = () => {

  const [num, setNum] = useState("1");
  const [name, setName] = useState();
  const [move, setMove] = useState();

  useEffect(() => {
    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setName(res.data.name);
      setMove(res.data.moves.length);
    }

    getData();
  });
  
  return (<>
    <h1>Pokemon</h1>
    <h2>You Choose {num} value</h2>
    <h2>You Name of Pokemon is {name} and Moves is {move}</h2>
    
    <select value={num} onChange={(event) => {
     setNum(event.target.value);
    }}>
     <option value="1" selected>1</option>
      <option value="25">25</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </>);
}

export default CompA;