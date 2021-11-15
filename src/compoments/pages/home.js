import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Cards1 from '../Cards1';
import Footer from '../Footer'

function Home() {
    return ( 
        <>
        <HeroSection />
        <Cards />
        <Cards1 />
        <Footer />
        </>
    )
}

export default Home;