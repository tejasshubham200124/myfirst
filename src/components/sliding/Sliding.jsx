
import "./sliding.css";
import Slider from "react-slick";
import React, { Component } from "react";
import { MdPadding } from "react-icons/md";



export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
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
            <img src="./hotels.jpeg" />
            <h5>Hotels</h5>
            <h6>901,157 hotels</h6>
          </div>
          <div>
            <img src="./apartments.jpeg" />
            <h5>Apartments</h5>
            <h6>890,730 Apartments</h6>
          </div>
          <div>
            <img src="./resorts.jpeg" />
            <h5>Resorts</h5>
            <h6>18.052 Resorts</h6>
          </div>
          <div>
            <img src="./villas.jpeg" />
            <h5>Villas</h5>
            <h6>474,442  villas</h6>
          </div>
          <div>
            <img src="./cabins.jpeg" />
            <h5>Cabins</h5>
            <h6>36,471 Cabins</h6>
          </div>
          <div>
            <img src="./cottages.jpeg" />
            <h5>Cottages</h5>
            <h6>154,630 cottages</h6>
          </div>
          <div>
            <img src="./camping.jpeg" />
            <h5>Campings</h5>
            <h6>13,086 camping sites</h6>
          </div>
          <div>
            <img src="./service.jpeg" />
            <h5>Service Apartments</h5>
            <h6>34,903 service apt</h6>
          </div>
        </Slider>
      </div>
    );
  }
}