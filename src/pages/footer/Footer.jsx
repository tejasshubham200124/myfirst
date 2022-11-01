import React from "react";
import { DefaultContext } from "react-icons";
import "./footer.css";
import { useState } from "react";

const Footer = () => {
    const [region, setRegion] = useState(true);
    const [city, setCity] = useState(false);
    const [poi, setPoi] = useState(false);
    const regionHandler = () => {
        setRegion(true);
        setCity(false);
        setPoi(false);
    };
    const cityHandler = () => {
        setRegion(false);
        setCity(true);
        setPoi(false);
    };
    const poiHandler = () => {
        setRegion(false);
        setCity(false);
        setPoi(true);
    };

    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="para">
                    <p>Destinations you may love</p>
                </div>
                <div className="ul">
                    <button  class="bttn"onClick={regionHandler}>Regions</button>
                    <button  class="bttn"onClick={cityHandler}>Cities</button>
                    <button  class="bttn"onClick={poiHandler}>Place of interest</button>
                </div>

                {region &&(
                    <div>
                <div className="content">
                    <div>
                        <p>Leh</p>
                        <h5>5,515 properties</h5>
                    </div>
                    <div>
                        <p>Ibiza</p>
                        <h5>5,515 properties</h5>
                    </div>
                    <div>
                        <p>Cornwall</p>
                        <h5>5,515 properties</h5>
                    </div>
                    <div>
                        <p>Lake District</p>
                        <h5>5,515 properties</h5>
                    </div>
                </div>
                <div className="content">
                    <div>
                        <p>Hawaii</p>
                        <h5>5,515 properties</h5>
                    </div>
                    <div>
                        <p>Travel</p>
                        <h5>5,515 properties</h5>
                    </div>
                    <div>
                        <p>Bihar</p>
                        <h5>5,515 properties</h5>
                    </div>
                    <div>
                        <p>Phukhet</p>
                        <h5>5,515 properties</h5>
                    </div>
                </div>
                <div className="content">
                    <div>
                        <p>Terefene</p>
                        <h5>5,515 properties</h5>
                    </div>
                    <div>
                        <p>Bali</p>
                        <h5>5,515 properties</h5>
                    </div>
                    <div>
                        <p>Zankibar</p>
                        <h5>5,515 properties</h5>
                    </div>
                    <div>
                        <p>Mykanos</p>
                        <h5>5,515 properties</h5>
                    </div>
                </div>
                <div className="content">
                    <div>
                        <p>Bora Bora</p>
                        <h5>5,515 properties</h5>
                    </div>
                    <div>
                        <p>jersey</p>
                        <h5>5,515 properties</h5>
                    </div>
                    <div>
                        <p>Isle of Wight</p>
                        <h5>5,515 properties</h5>
                    </div>
                    <div>
                        <p>England</p>
                        <h5>5,515 properties</h5>
                    </div>
                </div>
            </div>
                )}
                {city &&(
                    <p> <div>
                    <div className="content">
                        <div>
                            <p>Leh</p>
                            <h5>5,515 properties</h5>
                        </div>
                        <div>
                            <p>Ibiza</p>
                            <h5>5,515 properties</h5>
                        </div>
                        <div>
                            <p>Cornwall</p>
                            <h5>5,515 properties</h5>
                        </div>
                        <div>
                            <p>Lake District</p>
                            <h5>5,515 properties</h5>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <p>Hawaii</p>
                            <h5>5,515 properties</h5>
                        </div>
                        <div>
                            <p>Travel</p>
                            <h5>5,515 properties</h5>
                        </div>
                        <div>
                            <p>Bihar</p>
                            <h5>5,515 properties</h5>
                        </div>
                        <div>
                            <p>Phukhet</p>
                            <h5>5,515 properties</h5>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <p>Terefene</p>
                            <h5>5,515 properties</h5>
                        </div>
                        <div>
                            <p>Bali</p>
                            <h5>5,515 properties</h5>
                        </div>
                        <div>
                            <p>Zankibar</p>
                            <h5>5,515 properties</h5>
                        </div>
                        <div>
                            <p>Mykanos</p>
                            <h5>5,515 properties</h5>
                        </div>
                    </div>
                    <div className="content">
                        <div>
                            <p>Bora Bora</p>
                            <h5>5,515 properties</h5>
                        </div>
                        <div>
                            <p>jersey</p>
                            <h5>5,515 properties</h5>
                        </div>
                        <div>
                            <p>Isle of Wight</p>
                            <h5>5,515 properties</h5>
                        </div>
                        <div>
                            <p>England</p>
                            <h5>5,515 properties</h5>
                        </div>
                    </div>
                </div></p>
                )}
                {poi &&(
                   <div>
                   <div className="content">
                       <div>
                           <p>Leh</p>
                           <h5>5,515 properties</h5>
                       </div>
                       <div>
                           <p>Ibiza</p>
                           <h5>5,515 properties</h5>
                       </div>
                       <div>
                           <p>Cornwall</p>
                           <h5>5,515 properties</h5>
                       </div>
                       <div>
                           <p>Lake District</p>
                           <h5>5,515 properties</h5>
                       </div>
                   </div>
                   <div className="content">
                       <div>
                           <p>Hawaii</p>
                           <h5>5,515 properties</h5>
                       </div>
                       <div>
                           <p>Travel</p>
                           <h5>5,515 properties</h5>
                       </div>
                       <div>
                           <p>Bihar</p>
                           <h5>5,515 properties</h5>
                       </div>
                       <div>
                           <p>Phukhet</p>
                           <h5>5,515 properties</h5>
                       </div>
                   </div>
                   <div className="content">
                       <div>
                           <p>Terefene</p>
                           <h5>5,515 properties</h5>
                       </div>
                       <div>
                           <p>Bali</p>
                           <h5>5,515 properties</h5>
                       </div>
                       <div>
                           <p>Zankibar</p>
                           <h5>5,515 properties</h5>
                       </div>
                       <div>
                           <p>Mykanos</p>
                           <h5>5,515 properties</h5>
                       </div>
                   </div>
                   <div className="content">
                       <div>
                           <p>Bora Bora</p>
                           <h5>5,515 properties</h5>
                       </div>
                       <div>
                           <p>jersey</p>
                           <h5>5,515 properties</h5>
                       </div>
                       <div>
                           <p>Isle of Wight</p>
                           <h5>5,515 properties</h5>
                       </div>
                       <div>
                           <p>England</p>
                           <h5>5,515 properties</h5>
                       </div>
                   </div>
               </div>
                )}
               
        </div>
        </div>

    )
}
export default Footer;
