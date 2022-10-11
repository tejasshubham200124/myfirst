import React from "react";
import "./offer.css";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const Offer = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    return (
        <div className="main">
            <div>
                <input type="text"  placeholder="select your location" />
                <datalist>
                <option value="Objective C">Objective C</option>
                    
                </datalist>
            </div>
            <div>
                {/* <input type="date" className="form-control" placeholder="when to check in"></input>
            </div>
            <div> */}
                <DatePicker
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                />
            </div>
            <div>
                <input type="number"  placeholder="number of guests"></input>
            </div>
            <div>
              <button className="btnn">Search</button>
            </div>
        </div>

    )
}
export default Offer;