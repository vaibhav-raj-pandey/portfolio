import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection';
import Cards from "../Cards";
import Footer from '../Footer';
import Intro from './Intro'

function Home(){
    return (
        <>
            <HeroSection/>
            <Intro/>
            <Cards />
            <Footer/>
        </>
    );
}

export default Home;
