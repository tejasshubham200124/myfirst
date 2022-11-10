import React from "react";
import "./content.css";
import { FaUmbrellaBeach } from 'react-icons/fa';
import { RiLeafFill } from 'react-icons/ri';


export default function Content(props) {
  
    return (
      <div className="main-element">
        <div class="card">
          <div class="card-body">
            <div className="inner-carddtl">
              <div className="inner-cardimg">
                <img src={props.image} alt="first" />
              </div>
              <div className="review">
                <div className="inner-prop">
                  <h4>{props.name}</h4>
                  {/* <button className="btn btn-primary">search</button> */}
                </div>
                
                <div>
                  <p> <RiLeafFill /> travel substainable property</p>
                  <div>
                    <div>
                      <p> <FaUmbrellaBeach /> 1.9 km from beach</p>
                    </div>
                    <div>
                      <p>
                        Located in Mumbai’s business district, West End Hotel is a
                        5-minute walk from Marine Drive Promenade. It features a
                        restaurant, business centre and rooms with cable TV.
                        Parking is free.
                      </p>
                    </div>
                  </div>
                  {/* <div className="inner-column">
                    <span>{props.span}</span>
                    <span>125 reviews</span>
                  </div> */}
                </div>
              </div>
              <div className="right-col">
                <div className="inner-column">
                  <span>{props.span}</span>
                  <span>125 reviews</span>
                  <div className="right-btn">
                  <button className="btn btn-primary">search</button>
                  </div>
                </div>
     
                  {/* <button className="btn btn-primary"></button> */}
              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

