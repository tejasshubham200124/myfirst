import React from "react";
import "./hero.css";

const Hero = () =>{
    return(
      <div className="container-fluid">
        <div class="card-group" >
        <div class="cardinfo">
          <img class="card-img-top" src="./dubai.jpeg" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Save 15% or moree</h5>
            <p class="card-text">This summer, make your dream trip a reality. Book and stay for less..</p>
            <button type="button" class="btn btn-primary mybutton">Explore deals</button>
           
          </div>
        </div>
        <div class="cardinfo">
          <img class="card-img-top" src="./lasvegas.jpg" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Escape for a while</h5>
            <p class="card-text">Enjoy the freedom of a monthly stay on Sarmicrosystems.com</p>
            <button type="button" class="btn btn-primary mybutton">Discover monthly stays</button>
            
          </div>
        </div>
        
      </div>
      </div>

    )
}
export default Hero;