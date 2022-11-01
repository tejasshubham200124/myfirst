import React from 'react';
import Footer from "../footer/Footer";
import Navbar from "../components/Navbar";
import Nletter from '../nletter/Nletter';
import Offer from '../offers/Offer';



const Layout =({children}) =>{
    return(
        <>
        <div className='container-fluid p-0'>
        <div >
            <Navbar />  
        </div>
       
        <main>{children}</main> <Footer/>
        <Nletter />
        </div>
        </>
    )
}

export default Layout;