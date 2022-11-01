import React from "react";
import "./header.css";
import { FaHotel } from 'react-icons/fa';


const Header = () => {
    return (
        <div className="container-fluid p-0">
        <div className="header">
            <h1>Find your next stays  <FaHotel size ={30} /></h1>
            <h2>Search best deals on hotels and much moree...</h2>
        </div>
        </div>
    );
};
export default Header;