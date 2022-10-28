import React from 'react'
import Layout from '../pages/layout/Layout'
import "./cars.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function Cars() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <Layout >
      <div className="heading">
        <div className='text-area'>
          <div className='book'>
            <h1>Your entire holiday in one click</h1>
            <p>Book  Flights + Hotels</p>
          </div>
          <div>
            <p>in collorbartion with <span>Booking.com</span></p>
          </div>
          <div className='search'>
            <div className='input-dt1'>
                <input type="text" /> 
                <DatePicker
                  selected={startDate}
                  onChange={onChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                />
           
            </div>
            <div className='input-dt'>
              <input type="text" />
              <button className='btn btn-primary'>Search hotels + flights</button>
            </div>



          </div>
        </div>
      </div>

    </Layout>
  )
}