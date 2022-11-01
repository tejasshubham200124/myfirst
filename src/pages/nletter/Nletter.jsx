import React from "react";
import "./nletter.css";

const Nletter = () => {
    return (
        <div className="container-fluid p-0">
        <div className="nlt">
            <div className="container3">
                <div className="txt1">
                    <h1>Save Time,Save Money !</h1>
                    <p>Sign up and we will send you the best deals</p>
                    <div className="eml">
                     
                        <input type="text" placeholder="Your Email" />
                        
                       
                        <button type="button">Subscribe</button>
                        
                    </div>
                    <div className="sp">
                        <div className="cb">
                        <input type="checkbox" className="cbox" />
                        <span>send me a link to get free BookingApp.com</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
};

export default Nletter;