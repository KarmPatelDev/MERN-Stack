import React from 'react';
import Quest, {Sum, Sub, Mul, Div} from './Quest';

function App(){
    return (
    <>
      <p>{Quest}</p>
      <p>Sum Of 20 and 10 is {Sum(20, 10)}</p> 
      <p>Substraction Of 20 and 10 is {Sub(20, 10)}</p>
      <p>Multiplication Of 20 and 10 is {Mul(20, 10)}</p>
      <p>Division Of 20 and 10 is {Div(20, 10)}</p>
    </>
    );
}

export default App;
