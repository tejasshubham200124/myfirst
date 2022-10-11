
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./files/Header";
import Offer from "./offers/Offer"
import Hero from "./hero/Hero";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHotel } from "react-icons/bs";
import Sliding from "./components/sliding/Sliding";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./banner/Banner";
import Cards from "./cards/Cards";
import { AiFillCloseCircle } from "react-icons/ai";
import Slider2 from "./slider2/Slider2";
import Footer from "./footer/Footer";
import Nletter from "./nletter/Nletter";
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";



const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Offer />
      <Hero />
      <Sliding />
      <Banner />
      <Cards />
      <Slider2 />
      <Footer />
      <Nletter />
    </div>

  );
};

export default App;