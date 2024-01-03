/** @format */

import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/home">home</NavLink>
      <NavLink to="/cart">cart</NavLink>
      <NavLink to="/">Logout</NavLink>
      <NavLink to="/Contact">Contact us</NavLink>
    </div>
  );
};

export default Navbar;
