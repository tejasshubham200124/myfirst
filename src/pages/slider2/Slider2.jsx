
import "./slider2.css";
import Slider from "react-slick";
import React, { Component } from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide:0 , 
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container-fluid">
      <div className="slider">
        
        <Slider {...settings}>
          <div >
         
            <img src="./goa.jpg"  alt="img" />
          
           <h5>Goa</h5>
           <h6>3,904 properties</h6>
          </div>
          <div>
          <Link to="/Mumbai" >
          <img src="./mumbai.jpg" alt="img" />
          </Link>
          <h5>Mumbai</h5>
           <h6>1,560 properties</h6>
          </div>
          <div>
          <img src="./ng.jpg" alt="img" />
          <h5>North Goa</h5>
           <h6>650 properties</h6>
          </div>
          <div>
          <img src="./delhi.jpg" alt="img" />
          <h5>Delhi</h5>
           <h6>8601 properties</h6>
          </div>
          <div>
          <img src="./banglore.jpg" alt="img" />
          <h5>Banglore</h5>
           <h6>5,894  properties</h6>
          </div>
          <div>
          <img src="./pondi.jpg" alt="img" />
          <h5>Pondicherry</h5>
           <h6>398 properties</h6>
          </div>
          <div>
          <img src="./lonavala.jpg" alt="img"  />
          <h5>Lonavala</h5>
           <h6>1,584 properties</h6>
          </div>
          <div>
          <img src="./udaipur.jpg" alt="img"  />
          <h5>Udaipur</h5>
           <h6>3,086 properties</h6>
          </div>
          <div>
          <img src="./hydrabad.jpg" alt="img" />
          <h5>Hydrabad</h5>
           <h6>4,903 properties</h6>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}