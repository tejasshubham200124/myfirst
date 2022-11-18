import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import Flights from "../routes/Flights";
import Cars from "../routes/Cars";
import Home from "../pages/Home";
import "./index.css";
import { NavLink } from "react-router-dom";
import { LinkProps } from "react-router-dom";
import Mumbai from "../routes/Mumbai";
import Login from "../login/Login";
import Register from "../register/Register";
import Profile from "../routes/Profile";
import Updateprofile from "../routes/Updateprofile";

export default function Navigation() {
  return (
    <BrowserRouter>
      {/* <NavLink exact activeClassName='is-active' to='/'>Home</NavLink>
        <NavLink activeClassName='is-active' to='/flights'>About</NavLink>
        <NavLink activeClassName='is-active' to='/cars'>About</NavLink> */}
      {/* <NavLink
            to="Stays"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
           Home
          </NavLink>
        <NavLink
            to="Flights"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
         Flights
          </NavLink>
        <NavLink
            to="Cars"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
          Cars
          </NavLink>
       */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/Mumbai" element={<Mumbai />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/UpdateProfile" element={<Updateprofile/>} />
      </Routes>
    </BrowserRouter>
  );
}
