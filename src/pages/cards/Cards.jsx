import React from "react";
import "./cards.css";

const Cards = () => {
    return (
        <div className="full-body">
        <div className="container">
            
            <div class="card">
               
                <div className="main-card">
                    <div className="card-imgg">
                        <img src="wm.jpg" />
                    </div>
                    <div class="card-body">
                        <div className="tag">
                            <h3>Subscribe to see secret deals</h3>
                            <p>Prices drop as soon as you sign in !</p>
                        </div>
                        <div className="inner-tag">
                            <input type="text" placeholder="Enter email " />
                            <button className="signIn-btn">Sign me up !</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Cards;