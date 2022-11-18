import React from "react";
import "./navbar.css";
import { BiBed } from "react-icons/bi";
import { TbPlaneInflight } from "react-icons/tb";
import { AiFillCar } from "react-icons/ai";
// import {  RiHotelLiner } from 'react-icons/Ri';
import { MdAttractions } from "react-icons/md";
import { FaTaxi } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { BiUserCircle } from 'react-icons/Bi';
import { Navigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  // const [authenticated, setauthenticated] = useState(null);
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("authenticated");
  //   if (loggedInUser) {
  //     setauthenticated(loggedInUser);
  //   }
  // }, []);
  // if (!authenticated) {
  //   return <Navigate replace to="./login" />;
  // }
  const [show, setShow] = useState(false);
  var user_id = localStorage.getItem("userid");
  var user_name = localStorage.getItem("username");
  var authenticated = localStorage.getItem("authenticated");
  console.log("userid", user_id);
  console.log("authenticated", authenticated);
  //console.log("password", user_pass);
  
  const handleChange =() =>{
    setShow(true)
    if (
      localStorage.getItem("userid") == true &&
      localStorage.getItem("username") ==true &&
      localStorage.getItem("password") == true
    ) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  
  return (
    <div className="container-fluid p-0">
      {/* <div className="navbar">

      <div className="navContainer">
        <div className="logo">Sar Software Solutions
          
          <button>Register</button>

          <button>Sign In</button>
        </div> */}

      <div className="navbar">
        <div className="navLink">
          <span>Sar Software solutions</span>
        </div>
        <div className="navigation">
          <Link to="/Login">
          {authenticated ? null : <button className="button" onClick={handleChange}>Register</button> }
            {/* <button className="button" onClick={handleChange}>Register</button> */}
          </Link>
          <Link to="/Register">
            {authenticated ? null : <button className="button" onClick={handleChange}>Sign Up</button> }
            {/* <button className="button" onClick={handleChange}>Sign Up</button> */}
          </Link>
          <Link to="/Profile">
            {authenticated ? <button className="button" onClick={handleChange}> <CgProfile size={25} /></button> : null} 
          </Link>
        </div>
      </div>
      <div className="order">
        <ul>
          <div className="min">
            <span>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <BiBed size={25} className="icon" />
                stays
              </NavLink>
            </span>
            {/* <BiBed size={25} className="icon"/><span><Link to="/">stays</Link></span> */}
          </div>
        </ul>
        <div className="min">
          <ul>
            <span>
              {" "}
              <NavLink
                to="/flights"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                {" "}
                <TbPlaneInflight size={25} className="icon" />
                flights
              </NavLink>
            </span>
          </ul>
        </div>
        <div className="min">
          <ul>
            <span>
              {" "}
              <NavLink
                to="/Cars"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <AiFillCar size={25} className="icon" />
                Cars
              </NavLink>
            </span>
          </ul>
        </div>
        <div className="min">
          <ul>
            <span>
              {" "}
              <MdAttractions size={25} className="icon" />
              attractions
            </span>
          </ul>
        </div>
        <div className="min">
          <ul>
            <span>
              <FaTaxi size={25} className="icon" />
              taxi
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
