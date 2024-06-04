import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

// const User = ({ match }) => {
//   return (<>
//     <h1>This is user {match.params.fname} and {match.params.lname} Page</h1>
//   </>);
// }

// Use Same Name in useParams and App (i.e :fname, fname   :lname, lname)
const User = () => {
  const { fname, lname } = useParams();

  // useLocation show object for live website data
  const location = useLocation();
  console.log(location);

  // useHistory show object and we can take action like go to previous url and another next url
  // history is muteble that's why if you use pathname then don't go with history use location
  const history = useHistory();
  console.log(history);

  return (<>
    <h1>This is user {fname} and {lname} Page</h1>
    <p>My current location is {location.pathname}.</p>

    {location.pathname === `user/karm/patel` ? (<button onClick={() => history.goBack()}>Previous Page</button>) : null}

    {location.pathname === `user/karm/patel` ? (<button onClick={() => history.push("/")}>Home Page</button>) : null}
  </>);
}

export default User;