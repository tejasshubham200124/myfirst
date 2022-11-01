import React from "react";
import "./cards.css";

const Cards = () => {
    return (
        <div className="container-fluid">
        <div className="crd">
   
            <div class="card">
                <div class="card-body">
                     {/* <img src="wm.jpg" /> */}
                    <div>
                        <h4>Subscribe to see the secret deals</h4>
                        <h5>Prices drop the moment you sign in !</h5>
                        <div className="txt">
                           
                            <input type="text" placeholder="Enter your email here" />
                            <button type="button">Sign Up Now !</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Cards;