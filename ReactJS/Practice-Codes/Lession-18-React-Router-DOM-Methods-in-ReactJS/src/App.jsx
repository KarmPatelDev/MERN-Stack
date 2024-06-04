// Using Router we Can use Client Site Rendering not Server Site Rendering
//NOTE: See index.jsx File
//If we don't use Switch then it show all match component not only first component
//First Match then it show that first page below not show for that we have to write "exact"

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Menu from './Menu';
import User from './User';

const Name = () => {
  return <h1>Hello, World</h1>;
};

const App = () => {
  return (<>
    <Menu />
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/contact" component={() => <Contact name='Contact' />} />
      <Route path="/about" component={About} />
      {
        /*
        We can use render instead of component property

        When you use component (instead of render or children, below) the router uses React.createElement to create a new react element from the given component. That means if you provide an inline function to the componentprop, you would create  a new component every render. This results in the existing component unmounting and the new component mounting instead of just updating the existing component. When using an inline rendering, use the render

        - There is not difference of speed
        - From My Perspective, We have to use component when we don't have to pass props
        - When we have to pass the props then use render property because it change to only one component not make another new.
        */
      }
      <Route path="/service" render={() => <Service name='Service' />} />


      <Route exact path="/contact/name" component={Name} />

      <Route path="/user/:fname/:lname" component={User} />

      {/*       404 Error Page Component */}
      <Route component={Error} />

      {/*       Redirect the Page if Page is Not Found*/}
      <Redirect to="/" />

    </Switch>
  </>);
}

export default App;