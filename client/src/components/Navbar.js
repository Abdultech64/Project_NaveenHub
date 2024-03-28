import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "../App";

const Navbar = () => {
  const [token,setToken]=useContext(store)
  return (
   <>
      <header>
        <div className="logo">
          Logo
          <a href="#">Company</a>
        </div>
      </header>

      <div className="display-menu">
        <Link className="menu1" to="/">
          Student
        </Link>
        <Link className="menu2" to="/contact">
          Contact Us
        </Link>
        <Link className="menu3" to="/register">
          Register
        </Link>
        <Link className="menu3" to="/loginpage">
          Login
        </Link>
        <Link className="menu3" to="/myprofile">
          MyProfile
        </Link>
      </div>
      </>
  );
};
export default Navbar;