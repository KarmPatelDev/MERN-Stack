import React from "react";
import Heading from "./Heading";
import Content from "./Content";
import List from "./List";
import ImportyoutubeName, {favProg, myName, hello} from "./Import";
// it is export/import in the type of object
import * as WildCard from './Import';  // it means it fetch all that are export

function App(){
    return (
  <>
  <Heading/>
  <Content/>
  <List/>
  <p>{ImportyoutubeName}</p>
  <p>{favProg}</p>
  <p>{myName}</p>
  <p> hello is function {hello()}</p>

  <p>For WildCard</p>
  <p>use default for default export not a name of defaulr export value => {WildCard.default}</p> 
  <p>{WildCard.favProg}</p>
  <p>{WildCard.myName}</p>
  <p> hello is function {WildCard.hello()}</p>
  </>
    );
}

export default App;
