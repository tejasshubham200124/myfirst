import React from 'react'
import Layout from '../pages/layout/Layout'
import "./cars.css";
import { CiPlane } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { BsDoorOpen } from 'react-icons/bs';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import BLUE5 from "./../../public/BLUE5.jpg";
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
      <div className='container-fluid p-0 hero-section' style={{ backgroundImage: "url('BlUE5.jpg')" }}>
        {/* <img src="./BLUE5.jpg" /> */}
        <div className="heading">
          <div className='text-area'>
            <div className='book'>
              <h1>Your entire holiday in one click</h1>
              <p>Book  Flights + Hotels</p>
            </div>
            <div>
              <p>in collorbartion with <span>Booking.com</span></p>
            </div>
            <div className='dd'>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Round Trip
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>

              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Economy
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <div className='container-fluid p-0'>
              <div className='botm'>
                <div className="input-group">
                  <div className='input-set'>
                    <div className='d-flex flex-row bg-white rounded'>
                      <div className="icn px-3">
                        <CiPlane size={25} />
                      </div>
                      <div className='d-flex justify-content-center flex-column'>
                        <label>Flying from</label>
                        <input type="text" aria-label="First name" placeholder='Flying from' className="form-control p-0 border border-white" />
                      </div>
                    </div>
                    <div className='d-flex flex-row bg-white rounded'>
                      <div className="icn px-3">
                        <CiLocationOn size={25} />
                      </div>
                      <div className='d-flex justify-content-center flex-column'>
                        <label>Flying to</label>
                        <input type="text" aria-label="Last name" placeholder='Flying to' className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className='input-set'>
                    <input type="date" aria-label="First name" placeholder='departure' className="form-control" />
                    <input type="date" aria-label="Last name" placeholder='return' className="form-control" />
                  </div>
                </div>
                <div className="input-group">
                  <div className='input-set2'>
                  <div className='d-flex flex-row bg-white rounded'>
                      <div className="icn px-3">
                        <AiOutlineUsergroupDelete size={25} />
                      </div>
                      <div className='d-flex justify-content-center flex-column'>
                        {/* <label>Flying from</label> */}
                        <input type="number" aria-label="First name" placeholder='1 passanger' className="form-control p-0 border border-white" />
                      </div>
                    </div>
                    <div className='d-flex flex-row bg-white rounded'>
                      <div className="icn px-3">
                        <BsDoorOpen size={25} />
                      </div>
                      <div className='d-flex justify-content-center flex-column'>
                        {/* <label>Flying to</label> */}
                        <input type="number" aria-label="Last name" placeholder='1 room' className="form-control" />
                      </div>
                    </div>
                    <button className='inner-button'>Search Hotels + flights</button>
                      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout >
  )
}