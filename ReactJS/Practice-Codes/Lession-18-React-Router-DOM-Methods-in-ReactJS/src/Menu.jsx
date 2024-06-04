import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (<>
    <Link to='/'>About Us</Link>
    <Link to='/contact'>Contact Us</Link>

    {/*   For Add css you can use NavLink it is advantage over Link 
       exact for if class is active hen only use css
*/}
    <NavLink exact activeClassName="active_class" to='/about'>About Us</NavLink>
    <NavLink exact activeClassName="active_class" to='/service'>Services</NavLink>

    <NavLink exact activeClassName="active_class" to='/User/karm/patel'>Users</NavLink>
  </>);
}

export default Menu;