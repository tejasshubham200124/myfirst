import React from 'react'
import Navbar from "./components/Navbar";
import Header from "./files/Header";
import Offer from "./offers/Offer"
import Hero from "./hero/Hero";
import { FaHotel } from "react-icons/bs";
import Sliding from "./sliding/Sliding";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./banner/Banner";
import Cards from "./cards/Cards";
import { AiFillCloseCircle } from "react-icons/ai";
import Slider2 from "./slider2/Slider2";
import Footer from "./footer/Footer";
import Nletter from "./nletter/Nletter";

// import Flights from "/routes/Flights";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
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
   
    {/* <Flights /> */}
    

    </div>
  )
}
