import React from 'react';
import Footer from "../footer/Footer";
import Navbar from "../components/Navbar";
import Nletter from '../nletter/Nletter';
import Offer from '../offers/Offer';



const Layout =({children}) =>{
    return(
        <>
        <div>
            <Navbar />  
        </div>
       
        <main>{children}</main> <Footer/>
        <Nletter />
        </>
    )
}

export default Layout;