
// React Context API allows you to easily access data at different levels of the 

// component tree, without passing prop to every level.

// There are three stage to create Context
// 1. Create a context state  createContext();
// 2. We need a provider
// 3. We need of consumer {accept only function}

import react, {createContext} from "react";
import ChildA from "./ChildA";

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  
return (
<>
<FirstName.Provider value={"Patel"}>
<LastName.Provider value={"Karm"}>
  <ChildA/>
</LastName.Provider>
</FirstName.Provider>
</>
);
}

export default App;
export {FirstName, LastName};