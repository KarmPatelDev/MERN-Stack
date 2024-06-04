import react, {useState} from "react";
import { questions } from "./Api";
import Myaccordian from "./Myaccordian";

const Accordian = () => {

  const [data, setData] = useState(questions);
  
  return (<>
    {
      data.map((currElement) => {
        const {id} = currElement;
        return <Myaccordian key={id} {...currElement}/>;
      })
    }
  </>
)
}

export default Accordian;