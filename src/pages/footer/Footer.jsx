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
            <div className="container">
                <div className="para">
                    <p>Destinations you may love</p>
                </div>
                
                <div className="ul">
                    <div className="space">
                        <button className={`${region ? "bttn-active" : "bttn"}`} onClick={regionHandler}>Regions</button>

                    </div>
                    <div className="space">
                        <button className={` ${city ? "bttn-active" : " bttn"}`} onClick={cityHandler}>Cities</button>
                    </div>
                    <div className="space">
                        <button className={` ${poi ? "bttn-active" : " bttn"}`} onClick={poiHandler}>Place of interest</button>
                    </div>
                </div>

                {region && (
                    <div>
                        <div className="content">
                            <div className="inner-inc">
                                <p>Leh</p>
                                <h5>5,515 properties</h5>
                            </div>
                            <div className="inner-inc">
                                <p>Ibiza</p>
                                <h5>5,515 properties</h5>
                            </div>
                            <div className="inner-inc">
                                <p>Cornwall</p>
                                <h5>5,515 properties</h5>
                            </div>
                            <div className="inner-inc">
                                <p>Lake District</p>
                                <h5>5,515 properties</h5>
                            </div>
                        </div>
                        <div className="content">
                            <div className="inner-inc">
                                <p>Hawaii</p>
                                <h5>5,515 properties</h5>
                            </div>
                            <div className="inner-inc">
                                <p>Travel</p>
                                <h5>5,515 properties</h5>
                            </div>
                            <div className="inner-inc">
                                <p>Bihar</p>
                                <h5>5,515 properties</h5>
                            </div>
                            <div className="inner-inc">
                                <p>Phukhet</p>
                                <h5>5,515 properties</h5>
                            </div>
                        </div>
                        <div className="content">
                            <div className="inner-inc">
                                <p>Terefene</p>
                                <h5>5,515 properties</h5>
                            </div>
                            <div className="inner-inc">
                                <p>Bali</p>
                                <h5>5,515 properties</h5>
                            </div>
                            <div className="inner-inc">
                                <p>Zankibar</p>
                                <h5>5,515 properties</h5>
                            </div>
                            <div className="inner-inc">
                                <p>Mykanos</p>
                                <h5>5,515 properties</h5>
                            </div>
                        </div>
                        <div className="content">
                            <div className="inner-inc">
                                <p>Bora Bora</p>
                                <h5>5,515 properties</h5>
                            </div>
                            <div className="inner-inc">
                                <p>jersey</p>
                                <h5>5,515 properties</h5>
                            </div>
                            <div className="inner-inc">
                                <p>Isle of Wight</p>
                                <h5>5,515 properties</h5>
                            </div>
                            <div className="inner-inc">
                                <p>England</p>
                                <h5>5,515 properties</h5>
                            </div>
                        </div>
                    </div>
                )}
                {city && (
                    <div className="cn">
                        <div className="content2">
                            <div className="cnt">
                                <p>Gurgaon, India</p>
                                <h5>181 holiday rentals, 95 apartments, <br></br>75 B&Bs, 70 homestays, 66 guest houses</h5>
                            </div>
                            <div className="cnt">
                                <p>Mumbai, India</p>
                                <h5>137 holiday rentals, <br></br>73 apartments, 48 B&Bs, 44 hostels, 42 homestays</h5>
                            </div>
                            <div className="cnt">
                                <p>Jaipur, India</p>
                                <h5>190 holiday rentals, <br></br>74 homestays, 61 apartments, 55 B&Bs, 46 cottages</h5>
                            </div>
                            <div className="cnt">
                                <p>England</p>
                                <h5>5,515 properties</h5>
                            </div>
                        </div >
                        <div className="content2">
                            <div className="cnt">
                                <p>Rishīkesh, India</p>
                                <h5>103 holiday rentals, <br></br>53 homestays, 45 hostels, 30 B&Bs, 28 apartments</h5>
                            </div>
                            <div className="cnt">
                                <p>AMmritsar India</p>
                                <h5>61 holiday rentals, 34 B&Bs,<br></br> 24 homestays, 16 guest houses, 13 apartments</h5>
                            </div>
                            <div className="cnt">
                                <p>Kolkata India</p>
                                <h5>192 holiday rentals, 106 B&Bs, <br></br>103 homestays, 88 apartments, 84 guest houses</h5>
                            </div>
                            <div className="cnt">
                                <p>England</p>
                                <h5>5,515 properties</h5>
                            </div>

                        </div>

                        <div className="content2">
                            <div className="cnt">
                                <p>Bangkok</p>
                                <h5>4040 hotels</h5>
                            </div>
                            <div className="cnt">
                                <p>New york</p>
                                <h5>8080 hotels</h5>
                            </div>
                            <div className="cnt">
                                <p>Newcastle upon Tyne</p>
                                <h5>5,515 properties</h5>
                            </div >
                            <div className="cnt">
                                <p>England</p>
                                <h5>5,515 properties</h5>
                            </div>
                        </div >
                        <div className="content2">
                            <div className="cnt">
                                <p>Bangkok</p>
                                <h5>4040 hotels</h5>
                            </div>
                            <div className="cnt">
                                <p>New york</p>
                                <h5>8080 hotels</h5>
                            </div >
                            <div className="cnt">
                                <p>Newcastle upon Tyne</p>
                                <h5>5,515 properties</h5>
                            </div>
                            <div className="cnt">
                                <p>England</p>
                                <h5>5,515 properties</h5>
                            </div>
                        </div>
                    </div>



                )}
                {poi && (
                    <div className="container">
                        <div className="content3">
                            <div className="ct3">
                                <p>River Walk</p>
                                <h5>679 properties</h5>
                            </div>
                            <div className="ct3">
                                <p>Heathrow terminal 2</p>
                                <h5>5,515 properties</h5>
                            </div>
                            <div className="ct3">
                                <p>Comal River Tubing</p>
                                <h5>515 properties</h5>
                            </div>
                            <div className="ct3">
                                <p>Universal studios orlondo</p>
                                <h5>5,515 properties</h5>
                            </div>
                            <div className="ct3">
                                <p>Kahari wayerpark studios</p>
                                <h5>5,515 properties</h5>
                            </div>
                        </div>
                        <div className="content3">
                            <div className="ct3">
                                <p>Wembley Stadium</p>
                                <h5>672 properties</h5>
                            </div>
                            <div className="ct3">
                                <p>Al Maha wildlife reserve</p>
                                <h5>200 properties</h5>
                            </div>
                            <div className="ct3">
                                <p>Disneyland</p>
                                <h5>8890 properties</h5>
                            </div>
                            <div className="ct3">
                                <p>Portmerian</p>
                                <h5>5,515 properties</h5>
                            </div>
                            <div className="ct3">
                                <p>State park</p>
                                <h5>517 properties</h5>
                            </div>
                        </div>
                        <div className="content3">
                            <div className="ct3">
                                <p>Burj Arab</p>
                                <h5>509 properties</h5>
                            </div>
                            <div className="ct3">
                                <p>Disneyland Paris</p>
                                <h5>345 properties</h5>
                            </div>
                            <div className="ct3">
                                <p>NAigara falls statepark</p>
                                <h5> 881 properties</h5>
                            </div>
                            <div className="ct3">
                                <p>Ocean City Boardwalk</p>
                                <h5>901 properties</h5>
                            </div>
                            <div className="ct3">
                                <p>The shark</p>
                                <h5>456 properties</h5>
                            </div>
                        </div>
                        <div className="content3">
                            <div className="ct3">
                                <p>O2 arena</p>
                                <h5>668 properties</h5>
                            </div>
                            <div className="ct3">
                                <p>Heathrow terminal 5</p>
                                <h5>111 properties</h5>
                            </div>
                            <div className="ct3">
                                <p>Time Square</p>
                                <h5>878 properties</h5>
                            </div>
                            <div className="ct3">
                                <p>tubingRiver </p>
                                <h5>720 properties</h5>
                            </div>
                            <div className="ct3">
                                <p>Eiffel Tower</p>
                                <h5>233 properties</h5>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>

    )
}
export default Footer;
