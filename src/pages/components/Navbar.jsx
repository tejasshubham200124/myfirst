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
import { useState } from "react";
import { NavLink } from 'react-router-dom'



const Navbar = () => {
  // const [stays,setStays]=useState(true);
  // const [flights,setFlights]=useState(false);
  // const [cars,setCars]=useState(false);
  // const staysHandler= ()=>{
  //   setStays(true);
  //   setFlights(false);
  //   setCars(false);
  // }
  // const flightHandler =() =>{
  //   setStays(false);
  //   setFlights(true);
  //   setCars(false);
  // }
  // const carsHandler =() =>{
  //   setStays(false);
  //   setFlights(false);
  //   setCars(true);
  // }
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
          <button className="button">Sign In</button>
          </Link>
          <Link to="/Register">
          <button className="button">Register</button>
          </Link>
        </div>
      </div>
      <div className="order">
        <ul  >
          <div className="min">
            <span>< NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : 'inactive')}><BiBed size={25} className="icon" />stays</NavLink></span>
            {/* <BiBed size={25} className="icon"/><span><Link to="/">stays</Link></span> */}
          </div>
        </ul>
        <div className="min">
          <ul >
            <span>  <NavLink to="/flights" className={({ isActive }) => (isActive ? 'active' : 'inactive')} > <TbPlaneInflight size={25} className="icon" />flights</NavLink></span>
          </ul>
        </div>
        <div className="min">
          <ul>
            <span> <NavLink to="/Cars" className={({ isActive }) => (isActive ? 'active' : 'inactive')} ><AiFillCar size={25} className="icon" />Cars</NavLink></span>
          </ul>
        </div>
        <div className="min">
          <ul>
            <span> <MdAttractions size={25} className="icon" />attractions</span>
          </ul>
        </div>
        <div className="min">
          <ul>
            <span><FaTaxi size={25} className="icon" />taxi</span>
          </ul>
        </div>
      </div>
    </div>

  )

}
export default Navbar;