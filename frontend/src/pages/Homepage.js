import React from 'react';
import Header from '../Header';
import Products from '../Products';
import Footer from '../Footer';
import ImageSlider from './ImageSlider'; 
import { SliderData } from './SliderData'; 
import CompanyHead from '../CompanyHead';
import Chat from './Chat';

function Homepage() {
    return (
        <>
            <Header />
            <div style={{ margin: '40px 0' }}></div> 
            <CompanyHead/>
            <ImageSlider slides={SliderData} />
            <Products />
            <Chat/>
            <Footer />
        </>
    );
};
export default Homepage;
