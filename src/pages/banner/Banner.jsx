import React from "react";
import "./banner.css";

const Banner = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <img src="leeds.jpg" />
                    {/* <p>LEEDS</p> */}
                </div>
                <div class="col order-12">
                    <img src="leeds.jpg" />
                </div>
            </div>
            <div class="container2">
                <div class="row">
                    <img src="leeds.jpg" />

                    <img src="leeds.jpg" />

                    <img src="leeds.jpg" />

                </div>
            </div>
        </div>

    )
}
export default Banner;