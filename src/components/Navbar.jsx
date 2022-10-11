import React from "react";
import "./navbar.css";
import { BiBed } from 'react-icons/bi';
import { TbPlaneInflight } from 'react-icons/tb';
import { AiFillCar } from 'react-icons/ai';
// import {  RiHotelLiner } from 'react-icons/Ri';
import { MdAttractions } from 'react-icons/md';
import { FaTaxi } from 'react-icons/fa';



const Navbar = () => {
  return (
    <div className="navbar">

      <div className="navContainer">
        <div className="logo">Sar Software solutions
{/* 
          <button>Register</button>

          <button>Sign In</button> */}
        </div>
        <div className="order">
          <ul>
            <div>
              <BiBed size={25} /><span>stays</span>
            </div>
          </ul>
          <ul>
            <TbPlaneInflight size={25} /><span>flights</span>
          </ul>
          <ul>
            <AiFillCar size={25} /><span>cars</span>
          </ul>
          <ul>
            <MdAttractions size={25} /><span>attractions</span>
          </ul>
          <ul>
            <FaTaxi size={25} /><span>taxi</span>
          </ul>
        </div>
      </div>
      <div>
        {/* <button className="navBtn">Register</button>
        <button className="navBtn">Login</button> */}
      </div>
    </div>
    //   <div className="navbar">
    //     <img src="sar.jpg" />
    //     <span>Sar Software SOLUTIONS</span>
    //   </div>
  )
}
export default Navbar;