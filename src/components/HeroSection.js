import React from 'react'
import "./HeroSection.css"
import {Button} from './Button'
import '../App.css'

function HeroSection() {
    return (
        <>
        <div className='hero-container'>
            <h1>Vaibhav Raj Pandey</h1>
            {/* <p>Welcome!</p> */}
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    KNOW HIM
                </Button>
            </div>
        </div>
        </>
    )
}

export default HeroSection;
