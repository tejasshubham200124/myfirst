import React from 'react'
import Layout from '../pages/layout/Layout'
import "./flights.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function Flights() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (

    <Layout >
      <div className='search-box'>
        {/* <div className="card crds ">
          <div class="card-body  bdy">
          <p>Coronavirus (Covid-19) may affect your travel plans. Learn more..</p>
          </div>
        </div> */}
        <div className='context'>
          <h1>Compare and book flights with ease</h1>
          <p>discover your next destination</p>
          <div className='radio'>
            <input type="radio" />
            <label>Round trip</label>
            <input type="radio" />
            <label>One way</label>
            <input type="radio" />
            <label>Multicity</label>
          </div>
          <div className="mainn">
            <div>
              <input type="text" placeholder="select your location" />
              <datalist>
                <option value="Objective C">Objective C</option>

              </datalist>
            </div>
            <div>

              <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
              />
            </div>
            <div>
              <button className="btnn">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className='query'>
        <div className='questions'>
      <div class="card qt col-sm-4">
        <div class="card-header">
          How do i find cheepest fligts on booking.com
        </div>
        <div class="card-body">
        You can sort flights by price <br></br>to see them from cheapest to most expensive. <br></br>To find the cheapest flights, you also <br></br>need to consider factors like when you're booking <br></br>and want to travel.
        </div>
      </div>
      </div>
      </div>

      <div className='section '>
        <div className='contnt'>
          <div>
            <h4>Huge section</h4>
            <p>Easily compare thousand of flights</p>
          </div>
          <div>
            <h4>No hidden fees</h4>
            <p>Always know what you are paying for</p>
          </div>
          <div>
            <h4>More flexibility</h4>
            <p>Keep yout travel dates open</p>
          </div>
        </div>
      </div>


    </Layout>
  )
}
