import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer';
import Header from './Header';
import Paymentpage from './Paymentpage';
function Payments() {
  return (
    <>
    <Header/>
    <div style={{ margin: '40px 0' }}></div> 
    <Paymentpage/>
    <Footer/>
    </>
  );
}
export default Payments;
