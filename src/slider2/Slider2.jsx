
import "./slider2.css";
import Slider from "react-slick";
import React, { Component } from "react";



export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
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
      <div className="slider">
        
        <Slider {...settings}>
          <div>
            <img src="./goa.jpg" />
           <h5>Goa</h5>
           <h6>3,904 properties</h6>
          </div>
          <div>
          <img src="./mumbai.jpg" />
          <h5>Mumbai</h5>
           <h6>1,560 properties</h6>
          </div>
          <div>
          <img src="./ng.jpg" />
          <h5>North Goa</h5>
           <h6>650 properties</h6>
          </div>
          <div>
          <img src="./delhi.jpg" />
          <h5>Delhi</h5>
           <h6>8601 properties</h6>
          </div>
          <div>
          <img src="./banglore.jpg" />
          <h5>Banglore</h5>
           <h6>5,894  properties</h6>
          </div>
          <div>
          <img src="./pondi.jpg" />
          <h5>Pondicherry</h5>
           <h6>398 properties</h6>
          </div>
          <div>
          <img src="./lonavala.jpg" />
          <h5>Lonavala</h5>
           <h6>1,584 properties</h6>
          </div>
          <div>
          <img src="./udaipur.jpg" />
          <h5>Udaipur</h5>
           <h6>3,086 properties</h6>
          </div>
          <div>
          <img src="./hydrabad.jpg" />
          <h5>Hydrabad</h5>
           <h6>4,903 properties</h6>
          </div>
        </Slider>
      </div>
    );
  }
}