import React from "react";
import "./navbar.css";
import { BiBed } from 'react-icons/bi';
import { TbPlaneInflight } from 'react-icons/tb';
import { AiFillCar } from 'react-icons/ai';
// import {  RiHotelLiner } from 'react-icons/Ri';
import { MdAttractions } from 'react-icons/md';
import { FaTaxi } from 'react-icons/fa';
import {
  BrowserRouter as Router, Link, Switch,
  Route, Redirect,
} from "react-router-dom";



const Navbar = () => {
  return (
    <div className="container-fluid p-0">
      {/* <div className="navbar">

      <div className="navContainer">
        <div className="logo">Sar Software Solutions
          
          <button>Register</button>

          <button>Sign In</button>
        </div> */}
      <div className="navbar">
        <div className="navLink>=">
          <span>Sar Software solutions</span>
        </div>
        <div className="navigation">
          <button className="button">Sign In</button>
          <button className="button">Register</button>
        </div>
      </div>
      <div className="order">
        <ul>
          <div>
            <BiBed size={25} className="icon"/><span><Link to="/">stays</Link></span>
          </div>
        </ul>
        <ul>
          <TbPlaneInflight size={25} className="icon" /><span>  <Link to="/flights">flights</Link></span>
        </ul>
        <ul>
          <AiFillCar size={25} className="icon" /><span> <Link to="/Cars">Cars</Link></span>
        </ul>
        <ul>
          <MdAttractions size={25} className="icon"/><span>attractions</span>
        </ul>
        <ul>
          <FaTaxi size={25} className="icon"/><span>taxi</span>
        </ul>
      </div>
    </div>

  )

}
export default Navbar;