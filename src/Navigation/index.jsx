import React from 'react'
import {Routes,Route, BrowserRouter} from "react-router-dom";
import Flights from '../routes/Flights';
import Cars from '../routes/Cars';
import Home from '../pages/Home';


export default function Navigation() {
  return (
  
<BrowserRouter>

    <Routes> 
          <Route exact path="/" element={<Home />} />
          <Route exact path="/flights" element={<Flights />} />
          <Route exact path="/cars" element={<Cars />} />
    </Routes>
   
    </BrowserRouter>
   
  )
}
